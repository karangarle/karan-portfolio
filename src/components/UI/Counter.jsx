import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const steps = 50;
    const inc = to / steps;
    const id = setInterval(() => {
      start += inc;
      if (start >= to) {
        setCount(to);
        clearInterval(id);
      } else {
        setCount(Math.floor(start));
      }
    }, 1200 / steps);
    return () => clearInterval(id);
  }, [inView, to]);

  return <span ref={ref}>{count}{suffix}</span>;
}
