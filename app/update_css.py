import re

css_path = r"e:\Education Hub\app\src\index.css"

with open(css_path, "r", encoding="utf-8") as f:
    css = f.read()

# Replace root variables block specifically
root_replacement = """:root {
  /* Primary Palette */
  --navy: #ffffff;
  --navy-light: #f8fafc;
  --navy-mid: #f1f5f9;
  --navy-surface: #e2e8f0;
  --gold: #FF9933;
  --gold-light: #FFB366;
  --gold-dark: #CC7A29;
  --teal: #FF9933;
  --teal-dark: #CC7A29;
  --teal-light: #FFB366;
  /* Accents */
  --coral: #FF9933;
  --purple: #FF9933;
  --sky: #FF9933;
  /* Neutrals */
  --white: #1a1a1a;
  --gray-50: #0a0a0a;
  --gray-100: #1a1a1a;
  --gray-200: #334155;
  --gray-300: #475569;
  --gray-400: #64748b;
  --gray-500: #94a3b8;
  --gray-600: #cbd5e1;
  --gray-700: #e2e8f0;
  --gray-800: #f1f5f9;
  --gray-900: #f8fafc;
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --text-muted: #64748b;
  --text-dark: #000000;
  /* Typography */
  --font-heading: 'Outfit', 'Segoe UI', BlinkMacSystemFont, Roboto, sans-serif;
  --font-body: 'Inter', 'Segoe UI', BlinkMacSystemFont, Roboto, sans-serif;
"""

# We'll regex replace from `:root {` down to `  --font-body: ...;`
css = re.sub(
    r":root\s*\{.*?--font-body:[^\n]*;",
    root_replacement,
    css,
    flags=re.DOTALL
)

# Fix shadow glow variables
css = css.replace("--shadow-glow-gold: 0 0 30px rgba(245,166,35,0.25);", "--shadow-glow-gold: 0 0 30px rgba(255,153,51,0.25);")
css = css.replace("--shadow-glow-teal: 0 0 30px rgba(0,201,167,0.25);", "--shadow-glow-teal: 0 0 30px rgba(255,153,51,0.25);")

# We need to swap rgba(255,255,255, X) to rgba(0,0,0, X)
# And rgba(0,0,0, X) to rgba(255,255,255, X) but we must do it carefully to avoid double swapping.

css = css.replace("rgba(255,255,255", "RGBA_WHITE")
css = css.replace("rgba(0,0,0", "RGBA_BLACK")

css = css.replace("RGBA_WHITE", "rgba(0,0,0")
css = css.replace("RGBA_BLACK", "rgba(255,255,255")

# Need to handle spaces
css = css.replace("rgba(255, 255, 255", "RGBA_WHITE_S")
css = css.replace("rgba(0, 0, 0", "RGBA_BLACK_S")

css = css.replace("RGBA_WHITE_S", "rgba(0, 0, 0")
css = css.replace("RGBA_BLACK_S", "rgba(255, 255, 255")

# Replace any old red colors: 255,51,51  with saffron: 255,153,51
css = css.replace("255,51,51", "255,153,51")

# Replace any old teal/gold hardcoded colors with saffron
css = css.replace("0,201,167", "255,153,51")
css = css.replace("245,166,35", "255,153,51")
css = css.replace("167,139,250", "255,153,51")
css = css.replace("255,107,107", "255,153,51")

with open(css_path, "w", encoding="utf-8") as f:
    f.write(css)

print("index.css updated.")
