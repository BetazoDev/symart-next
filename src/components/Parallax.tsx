"use client";

import { useEffect, useRef } from "react";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

/** Framer ParallaxMedia: parallax % drives scale and a vertical shift from -travel/2 to +travel/2. */
export function ParallaxMedia({
  src,
  amount = 40,
  radius = 0,
  alt = "",
  className = "",
}: {
  src: string;
  amount?: number;
  radius?: number;
  alt?: string;
  className?: string;
}) {
  const boxRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    const layer = layerRef.current;
    if (!box || !layer) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const height = box.offsetHeight;
      if (!height) return;
      const rect = box.getBoundingClientRect();
      const progress = clamp((window.innerHeight - rect.top) / (window.innerHeight + height), 0, 1);
      const percent = clamp(amount, 5, 60) / 100;
      const travel = clamp(height * percent, 40, 480);
      const scale = 1 + travel / height;
      const y = -travel / 2 + progress * travel;
      layer.style.transform = `translate3d(0, ${y}px, 0) scale(${scale})`;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [amount]);

  return (
    <div ref={boxRef} className={`relative h-full w-full overflow-hidden ${className}`} style={{ borderRadius: radius }}>
      <div ref={layerRef} className="absolute inset-0 will-change-transform" style={{ transformOrigin: "50% 50%" }}>
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

/** Framer image parallax: the photo is taller by `amount`% and shifts while the block crosses the viewport. */
export function ParallaxImage({
  src,
  amount = 25,
  alt = "",
  className = "",
}: {
  src: string;
  amount?: number;
  alt?: string;
  className?: string;
}) {
  const boxRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    const layer = layerRef.current;
    if (!box || !layer) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const height = box.offsetHeight;
      if (!height) return;
      const rect = box.getBoundingClientRect();
      const progress = clamp((window.innerHeight - rect.top) / (window.innerHeight + height), 0, 1);
      const y = (progress - 0.5) * (amount / 100) * height;
      layer.style.transform = `translate3d(0, ${y}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [amount]);

  return (
    <div ref={boxRef} className={`relative overflow-hidden ${className}`}>
      <div
        ref={layerRef}
        className="absolute will-change-transform"
        style={{
          top: `-${Math.abs(amount) / 2}%`,
          left: 0,
          right: 0,
          height: `calc(100% + ${Math.abs(amount)}%)`,
        }}
      >
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    </div>
  );
}
