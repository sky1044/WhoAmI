export default function Label({ className, children, ...rest }) {
  return (
    <label className={`${className}`} {...rest}>
      {children}
    </label>
  );
}
