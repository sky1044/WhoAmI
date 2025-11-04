import { Link as BaseLink } from "react-router-dom";

export default function Link({ className, children, ...rest }) {
  return (
    <BaseLink className={`${className}`} {...rest}>
      {children}
    </BaseLink>
  );
}
