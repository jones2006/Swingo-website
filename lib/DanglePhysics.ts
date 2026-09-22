export interface DanglePhysicsOptions {
  anchorX?: number;
  anchorY?: number;
  restLength?: number;
  onMaxStretch?: (() => void) | null;
}

export interface RopeNode {
  x: number;
  y: number;
  oldX: number;
  oldY: number;
  mass: number;
}

export class DanglePhysics {
  anchorX: number;
  anchorY: number;
  restLength: number;
  maxStretch: number;
  mass: number;
  gravity: number;
  airDamping: number;

  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  angularVelocity: number;

  isGrabbed: boolean;
  dragOffset: { x: number; y: number };
  velocitySamples: { vx: number; vy: number; time: number }[];
  sampleWindow: number;
  lastSampleTime: number;

  lastRecordedX?: number;
  lastRecordedY?: number;

  stretchRatio: number;
  hasTriggeredOnCurrentPull: boolean;
  onMaxStretch: (() => void) | null;

  numNodes: number;
  segmentRestLength: number;
  nodes: RopeNode[];

  constructor(options: DanglePhysicsOptions = {}) {
    this.anchorX = options.anchorX ?? (typeof window !== 'undefined' ? window.innerWidth / 2 : 200);
    this.anchorY = options.anchorY ?? 15;

    this.restLength = options.restLength || 220;
    this.maxStretch = 340;
    this.mass = 1.6;
    this.gravity = 1200;
    this.airDamping = 0.994;

    this.x = this.anchorX;
    this.y = this.anchorY + this.restLength;
    this.vx = 0;
    this.vy = 0;
    this.angle = 0;
    this.angularVelocity = 0;

    this.isGrabbed = false;
    this.dragOffset = { x: 0, y: 0 };
    this.velocitySamples = [];
    this.sampleWindow = 6;
    this.lastSampleTime = 0;

    this.stretchRatio = 0;
    this.hasTriggeredOnCurrentPull = false;
    this.onMaxStretch = options.onMaxStretch || null;

    this.numNodes = 14;
    this.segmentRestLength = this.restLength / (this.numNodes - 1);
    this.nodes = [];
    this.initRope();
  }

  initRope() {
    this.nodes = [];
    for (let i = 0; i < this.numNodes; i++) {
      const t = i / (this.numNodes - 1);
      const px = this.anchorX;
      const py = this.anchorY + this.restLength * t;
      this.nodes.push({
        x: px,
        y: py,
        oldX: px,
        oldY: py,
        mass: i === 0 ? 0 : 0.08
      });
    }
  }

  setAnchor(x: number, y: number) {
    const dx = x - this.anchorX;
    const dy = y - this.anchorY;
    this.anchorX = x;
    this.anchorY = y;

    for (const n of this.nodes) {
      n.x += dx;
      n.oldX += dx;
      n.y += dy;
      n.oldY += dy;
    }
    this.x += dx;
    this.y += dy;
  }

  setRestLength(newLength: number) {
    this.restLength = newLength;
    this.segmentRestLength = this.restLength / (this.numNodes - 1);
    for (let i = 0; i < this.numNodes; i++) {
      const t = i / (this.numNodes - 1);
      this.nodes[i].y = this.anchorY + this.restLength * t;
      this.nodes[i].oldY = this.nodes[i].y;
    }
    if (!this.isGrabbed) {
      this.y = this.anchorY + this.restLength;
    }
  }

  grab(pointerScreenX: number, pointerScreenY: number) {
    this.isGrabbed = true;
    this.hasTriggeredOnCurrentPull = false;
    this.stretchRatio = 0;
    this.vx = 0;
    this.vy = 0;
    this.angularVelocity = 0;
    this.dragOffset.x = this.x - pointerScreenX;
    this.dragOffset.y = this.y - pointerScreenY;
    this.velocitySamples = [];
    this.lastSampleTime = performance.now();
  }

  dragTo(pointerScreenX: number, pointerScreenY: number) {
    if (!this.isGrabbed) return;

    const now = performance.now();
    const dt = (now - this.lastSampleTime) / 1000;

    const rawX = pointerScreenX + this.dragOffset.x;
    const rawY = pointerScreenY + this.dragOffset.y;

    const dx = rawX - this.anchorX;
    const dy = Math.max(15, rawY - this.anchorY);
    const dist = Math.hypot(dx, dy);

    if (dist > this.restLength) {
      const extra = dist - this.restLength;
      const allowedExtra = this.maxStretch * (1 - Math.exp(-extra / (this.maxStretch * 0.75)));
      const constrainedDist = this.restLength + allowedExtra;
      const ratio = constrainedDist / dist;
      this.x = this.anchorX + dx * ratio;
      this.y = this.anchorY + dy * ratio;
    } else {
      this.x = rawX;
      this.y = rawY;
    }

    const verticalExtra = Math.max(0, this.y - (this.anchorY + this.restLength));
    const isPullingStraightDown = Math.abs(this.x - this.anchorX) <= 85;

    if (isPullingStraightDown && verticalExtra > 0) {
      this.stretchRatio = Math.min(1, verticalExtra / (this.maxStretch * 0.85));

      if (this.stretchRatio >= 0.95 && !this.hasTriggeredOnCurrentPull) {
        this.hasTriggeredOnCurrentPull = true;
        if (typeof this.onMaxStretch === 'function') {
          this.onMaxStretch();
        }
      }
    } else {
      this.stretchRatio = 0;
    }

    this.angle = Math.atan2(this.x - this.anchorX, this.y - this.anchorY) * 0.45;

    if (dt > 0.006) {
      const vx = (this.x - (this.lastRecordedX || this.x)) / dt;
      const vy = (this.y - (this.lastRecordedY || this.y)) / dt;

      this.velocitySamples.push({ vx, vy, time: now });
      if (this.velocitySamples.length > this.sampleWindow) {
        this.velocitySamples.shift();
      }

      this.lastRecordedX = this.x;
      this.lastRecordedY = this.y;
      this.lastSampleTime = now;
    }
  }

  release() {
    if (!this.isGrabbed) return;
    this.isGrabbed = false;
    this.stretchRatio = 0;

    if (this.velocitySamples.length > 0) {
      let totalWeight = 0;
      let sumVx = 0;
      let sumVy = 0;

      this.velocitySamples.forEach((s, idx) => {
        const weight = Math.pow(1.8, idx);
        sumVx += s.vx * weight;
        sumVy += s.vy * weight;
        totalWeight += weight;
      });

      this.vx = sumVx / totalWeight;
      this.vy = sumVy / totalWeight;

      const maxSpeed = 4000;
      const speed = Math.hypot(this.vx, this.vy);
      if (speed > maxSpeed) {
        const scale = maxSpeed / speed;
        this.vx *= scale;
        this.vy *= scale;
      }
    }

    this.velocitySamples = [];
  }

  step(dt: number) {
    if (!this.isGrabbed) {
      this.stretchRatio = 0;
      const dx = this.x - this.anchorX;
      const dy = this.y - this.anchorY;
      const dist = Math.hypot(dx, dy);

      let fx = 0;
      let fy = this.gravity * this.mass;

      if (dist > this.restLength && dist > 0.001) {
        const stretch = dist - this.restLength;
        const unitX = dx / dist;
        const unitY = dy / dist;

        const tensionForce = (stretch * 640) + (Math.pow(stretch, 1.4) * 9.5);
        fx -= tensionForce * unitX;
        fy -= tensionForce * unitY;

        const radialVel = this.vx * unitX + this.vy * unitY;
        fx -= radialVel * 22 * unitX;
        fy -= radialVel * 22 * unitY;
      }

      const ax = fx / this.mass;
      const ay = fy / this.mass;

      this.vx += ax * dt;
      this.vy += ay * dt;

      const speed = Math.hypot(this.vx, this.vy);
      const dragFactor = 1 - Math.min(0.08, (0.00007 * speed) * dt * 60);
      this.vx *= this.airDamping * dragFactor;
      this.vy *= this.airDamping * dragFactor;

      this.x += this.vx * dt;
      this.y += this.vy * dt;

      const margin = 42;
      const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1000;
      if (this.x < margin) {
        this.x = margin;
        this.vx = -this.vx * 0.45;
      } else if (this.x > screenWidth - margin) {
        this.x = screenWidth - margin;
        this.vx = -this.vx * 0.45;
      }

      const targetAngle = Math.atan2(dx, dy);
      const angleDiff = targetAngle - this.angle;
      this.angularVelocity += angleDiff * 40 * dt;
      this.angularVelocity *= Math.pow(0.95, dt * 60);
      this.angle += this.angularVelocity * dt;

      if (
        Math.hypot(this.vx, this.vy) < 0.7 &&
        Math.abs(this.x - this.anchorX) < 0.5 &&
        Math.abs(this.y - (this.anchorY + this.restLength)) < 0.5
      ) {
        this.x = this.anchorX;
        this.y = this.anchorY + this.restLength;
        this.vx = 0;
        this.vy = 0;
        this.angle = 0;
        this.angularVelocity = 0;
      }
    }

    this.stepRopeNodes(dt);
  }

  stepRopeNodes(dt: number) {
    if (!this.nodes.length) return;

    this.nodes[0].x = this.anchorX;
    this.nodes[0].y = this.anchorY;

    const last = this.nodes[this.nodes.length - 1];
    last.x = this.x;
    last.y = this.y;

    const ropeGravity = 580 * dt * dt;
    const ropeDrag = 0.94;

    for (let i = 1; i < this.nodes.length - 1; i++) {
      const n = this.nodes[i];
      const vx = (n.x - n.oldX) * ropeDrag;
      const vy = (n.y - n.oldY) * ropeDrag;

      n.oldX = n.x;
      n.oldY = n.y;

      n.x += vx;
      n.y += vy + ropeGravity;
    }

    for (let iter = 0; iter < 10; iter++) {
      for (let i = 0; i < this.nodes.length - 1; i++) {
        const n1 = this.nodes[i];
        const n2 = this.nodes[i + 1];

        const dx = n2.x - n1.x;
        const dy = n2.y - n1.y;
        const d = Math.hypot(dx, dy);
        if (d === 0) continue;

        const diff = (d - this.segmentRestLength) / d;

        if (i === 0) {
          n2.x -= dx * diff * 0.9;
          n2.y -= dy * diff * 0.9;
        } else if (i === this.nodes.length - 2) {
          n1.x += dx * diff * 0.85;
          n1.y += dy * diff * 0.85;
          n2.x -= dx * diff * 0.15;
          n2.y -= dy * diff * 0.15;
        } else {
          n1.x += dx * diff * 0.5;
          n1.y += dy * diff * 0.5;
          n2.x -= dx * diff * 0.5;
          n2.y -= dy * diff * 0.5;
        }
      }

      for (let i = 1; i < this.nodes.length - 1; i++) {
        const prev = this.nodes[i - 1];
        const curr = this.nodes[i];
        const next = this.nodes[i + 1];

        const midX = (prev.x + next.x) * 0.5;
        const midY = (prev.y + next.y) * 0.5;

        curr.x += (midX - curr.x) * 0.04;
        curr.y += (midY - curr.y) * 0.04;
      }
    }
  }
}