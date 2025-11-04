import { useRef, useState, useCallback } from "react";

export const useDraggable = (scrollerRef) => {
  const [isDragging, setIsDragging] = useState(false);
  const lastX = useRef(0);
  const velocity = useRef(0);
  const animationFrame = useRef(null);
  const lastMoveTime = useRef(Date.now());

  const stopAnimation = () => {
    if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
  };

  const onDragStart = (clientX) => {
    stopAnimation();
    setIsDragging(true);
    lastX.current = clientX;
    lastMoveTime.current = Date.now();
    velocity.current = 0;
  };

  const onDragMove = (clientX) => {
    if (!isDragging || !scrollerRef.current) return;

    const now = Date.now();
    const deltaX = clientX - lastX.current;
    const dt = now - lastMoveTime.current;

    scrollerRef.current.scrollLeft -= deltaX;
    velocity.current = deltaX / dt;

    lastX.current = clientX;
    lastMoveTime.current = now;
  };

  const applyInertia = () => {
    if (!scrollerRef.current) return;

    const friction = 0.95;
    const bounceStrength = 0.2;
    const maxScroll =
      scrollerRef.current.scrollWidth - scrollerRef.current.clientWidth;

    scrollerRef.current.scrollLeft -= velocity.current * 16;

    if (scrollerRef.current.scrollLeft < 0) {
      velocity.current *= -bounceStrength;
      scrollerRef.current.scrollLeft = 0;
    } else if (scrollerRef.current.scrollLeft > maxScroll) {
      velocity.current *= -bounceStrength;
      scrollerRef.current.scrollLeft = maxScroll;
    }

    velocity.current *= friction;

    if (Math.abs(velocity.current) > 0.01) {
      animationFrame.current = requestAnimationFrame(applyInertia);
    } else {
      snapToCenter();
    }
  };

  const snapToCenter = () => {
    if (!scrollerRef.current) return;

    const container = scrollerRef.current;
    const center = container.scrollLeft + container.clientWidth / 2;
    const children = [...container.children];

    let nearest = null;
    let minDistance = Infinity;

    children.forEach((child) => {
      const rect = child.getBoundingClientRect();
      const childCenter = rect.left + rect.width / 2;
      const distance = Math.abs(childCenter - window.innerWidth / 2);
      if (distance < minDistance) {
        minDistance = distance;
        nearest = child;
      }
    });

    if (nearest) {
      const rect = nearest.getBoundingClientRect();
      const targetScroll =
        container.scrollLeft +
        (rect.left + rect.width / 2 - window.innerWidth / 2);
      container.scrollTo({ left: targetScroll, behavior: "smooth" });
    }
  };

  const onDragEnd = () => {
    setIsDragging(false);
    applyInertia();
  };

  return {
    onMouseDown: (e) => onDragStart(e.clientX),
    onMouseMove: (e) => onDragMove(e.clientX),
    onMouseUp: onDragEnd,
    onMouseLeave: onDragEnd,
    onTouchStart: (e) => onDragStart(e.touches[0].clientX),
    onTouchMove: (e) => onDragMove(e.touches[0].clientX),
    onTouchEnd: onDragEnd,
  };
};
