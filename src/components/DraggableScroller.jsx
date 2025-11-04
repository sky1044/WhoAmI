export default function DraggableScroller({ children, className, events }) {
  return (
    <div
      className={`flex flex-nowrap gap-8 overflow-x-scroll scroll-smooth whitespace-nowrap select-none ${className}`}
      {...events}
    >
      {children}
    </div>
  );
}
