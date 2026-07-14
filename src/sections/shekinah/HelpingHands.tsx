import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface HandState {
  x: number;
  y: number;
  endX: number;
  endY: number;
  rotation: number;
  isMoving: boolean;
  moveTimer: ReturnType<typeof setTimeout> | null;
  lastMoveTime: number;
  handIndex: number;
}

const handSvg = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.75 20.75C9.75 20.75 9.25 23.75 7.25 24.75C5.25 25.75 3.25 24.75 3.25 22.25C3.25 19.75 6.75 13.25 8.25 10.25C9.75 7.25 13.25 7.25 12.75 10.25C12.75 10.25 14.75 8.25 16.25 9.25C17.75 10.25 16.25 12.25 16.25 12.25C16.25 12.25 18.75 11.25 19.75 12.75C20.75 14.25 18.75 16.25 18.75 16.25C18.75 16.25 21.25 16.25 21.25 18.25C21.25 20.25 18.75 20.75 18.75 20.75Z"/></svg>`;

const heartSvg = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;

export default function HelpingHands() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<HandState>({
    x: 0,
    y: 0,
    endX: 0,
    endY: 0,
    rotation: 0,
    isMoving: false,
    moveTimer: null,
    lastMoveTime: 0,
    handIndex: 0,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const state = stateRef.current;

    const handsContainer = document.createElement('div');
    handsContainer.className = 'hands-container';
    container.appendChild(handsContainer);

    const createHand = (
      x: number,
      y: number,
      rotation: number,
      scale: number,
      opacity: number,
      type: number
    ) => {
      const hand = document.createElement('div');
      hand.className = 'hand';
      hand.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`;
      hand.style.opacity = String(opacity);
      hand.innerHTML = type === 0 ? handSvg : heartSvg;
      (hand.querySelector('svg') as SVGElement).style.color = type === 0
        ? 'rgba(199, 91, 42, 0.6)'
        : 'rgba(212, 160, 61, 0.6)';
      return hand;
    };

    const spawnHand = () => {
      const now = Date.now();
      const timeSinceMove = now - state.lastMoveTime;
      if (timeSinceMove > 300) return;

      const x = state.endX;
      const y = state.endY;
      const rotation = (Math.random() - 0.5) * 60;
      const scale = 0.3 + Math.random() * 0.4;
      const opacity = 0.5 + Math.random() * 0.5;
      const type = state.handIndex % 3 === 0 ? 1 : 0;

      const hand = createHand(x, y, rotation, scale, opacity, type);
      handsContainer.appendChild(hand);
      state.handIndex++;

      const tl = gsap.timeline({
        onComplete: () => {
          if (handsContainer.contains(hand)) {
            handsContainer.removeChild(hand);
          }
        },
      });

      tl.to(hand, {
        y: y + 30,
        rotation: rotation + (Math.random() - 0.5) * 30,
        opacity: 0,
        duration: 1 + Math.random(),
        ease: 'power2.out',
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      state.endX = e.clientX;
      state.endY = e.clientY;
      state.lastMoveTime = Date.now();
      state.isMoving = true;

      if (state.moveTimer) {
        clearTimeout(state.moveTimer);
      }

      state.moveTimer = setTimeout(() => {
        state.isMoving = false;
        state.moveTimer = null;
      }, 100);
    };

    let rafId: number;

    const animate = () => {
      const dx = state.endX - state.x;
      const dy = state.endY - state.y;

      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        state.x += dx * 0.15;
        state.y += dy * 0.15;
      } else {
        state.x = state.endX;
        state.y = state.endY;
      }

      if (state.isMoving && state.handIndex % 3 === 0) {
        spawnHand();
      }
      state.handIndex++;

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
      if (state.moveTimer) clearTimeout(state.moveTimer);
      if (handsContainer.parentNode) {
        handsContainer.parentNode.removeChild(handsContainer);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
