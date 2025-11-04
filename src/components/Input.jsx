export default function Input({ className, children, ...rest }) {
  return (
    <input className={`${className}`} {...rest}>
      {children}
    </input>
  );
}
