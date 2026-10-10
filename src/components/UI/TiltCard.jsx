import { useRef, useCallback } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export default function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics configuration for butter-smooth tilt
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotX = useTransform(smoothY, [-0.5, 0.5], [4, -4]);
  const rotY = useTransform(smoothX, [-0.5, 0.5], [-4, 4]);

  const onMove = useCallback(
    (e) => {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      x.set((e.clientX - r.left) / r.width - 0.5);
      y.set((e.clientY - r.top) / r.height - 0.5);
    },
    [x, y]
  );

  const onLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
