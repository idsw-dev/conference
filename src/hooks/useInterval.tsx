import { useEffect, useRef, useState } from "react";

export function useInterval(fn: () => void, interval: number) {
  const [active, setActive] = useState(false);
  const savedCallback = useRef(fn);

  // Update the saved callback if it changes
  useEffect(() => {
    savedCallback.current = fn;
  }, [fn]);

  useEffect(() => {
    let id: number | undefined;
    if (active) {
      id = window.setInterval(() => savedCallback.current(), interval);
    }
    // Cleanup the interval on unmount or when active/interval changes
    return () => {
      if (id !== undefined) {
        window.clearInterval(id);
      }
    };
  }, [active, interval]);

  const start = () => setActive(true);
  const stop = () => setActive(false);
  const toggle = () => setActive((prev) => !prev);

  return { start, stop, toggle, active };
}
