import { useEffect, useRef } from 'react';
import p5 from 'p5';

interface P5SketchProps {
  width?: number;
  height?: number;
}

const P5Sketch = ({ width = 400, height = 400 }: P5SketchProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<p5 | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      let particles: Particle[] = [];
      const particleCount = 50;

      class Particle {
        x: number;
        y: number;
        vx: number;
        vy: number;
        size: number;
        color: p5.Color;

        constructor() {
          this.x = p.random(p.width);
          this.y = p.random(p.height);
          this.vx = p.random(-2, 2);
          this.vy = p.random(-2, 2);
          this.size = p.random(5, 15);
          const hue = p.random(180, 300); // Cyan to pink range
          this.color = p.color(p.map(hue, 180, 300, 0, 360), 100, 80);
        }

        update() {
          this.x += this.vx;
          this.y += this.vy;

          if (this.x < 0 || this.x > p.width) this.vx *= -1;
          if (this.y < 0 || this.y > p.height) this.vy *= -1;
        }

        display() {
          p.fill(this.color);
          p.noStroke();
          p.ellipse(this.x, this.y, this.size, this.size);
        }

        connect(other: Particle) {
          const distance = p.dist(this.x, this.y, other.x, other.y);
          if (distance < 100) {
            p.stroke(this.color);
            p.strokeWeight(0.5);
            p.line(this.x, this.y, other.x, other.y);
          }
        }
      }

      p.setup = () => {
        p.createCanvas(width, height);
        for (let i = 0; i < particleCount; i++) {
          particles.push(new Particle());
        }
      };

      p.draw = () => {
        p.background(0, 10); // Fade effect
        for (let particle of particles) {
          particle.update();
          particle.display();
        }
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            particles[i].connect(particles[j]);
          }
        }
      };
    };

    p5InstanceRef.current = new p5(sketch, containerRef.current);

    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
      }
    };
  }, [width, height]);

  return <div ref={containerRef} className="w-full h-full" />;
};

export default P5Sketch;

