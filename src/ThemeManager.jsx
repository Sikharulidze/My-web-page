import { useEffect } from "react";
import lightDark from "./store/lightDark";

function ThemeManager() {
  const dark = lightDark((state) => state.dark);

  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(dark ? "dark" : "light");
  }, [dark]);

  return null;
}

export default ThemeManager;
