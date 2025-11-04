import { useLocation } from "react-router-dom";

export default function useCurrentPageGroup() {
  const location = useLocation();
  const group = location.pathname.split("/")[1];
  return group;
}
