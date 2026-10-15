export type Theme = "dark" | "light";
export const THEME_KEY = "theme";

/**
 * Runs before first paint (inlined in <head>): saved choice, else system preference.
 * Keep it dependency-free — it is stringified into a script tag.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_KEY}");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="dark"}})();`;
