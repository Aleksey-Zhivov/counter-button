import { FC } from "react";
import { useButtonContext } from "./useButtonContext";

const ButtonLoader: FC = () => {
  const { isLoading } = useButtonContext();
  return isLoading ? <span className="loader" /> : null;
};

export default ButtonLoader;