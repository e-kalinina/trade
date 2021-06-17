import { useEffect } from "react";

const useOutsideClick = (
  ref: React.RefObject<HTMLInputElement>,
  callback: () => void
) => {
  const handleClick = (e: globalThis.MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as HTMLInputElement)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClick;
