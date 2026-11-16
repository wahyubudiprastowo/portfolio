"""Convert every `font:` shorthand containing var() into longhand properties.

Lightning CSS (Tailwind v4) drops `font:` shorthand declarations that contain
var(), which silently destroys typography. Longhand declarations are safe.
Also moves the composite font stack variables from :root to body (where the
next/font variables are defined).
"""
import re

PATH = "/home/z/my-project/src/app/globals.css"
src = open(PATH).read()

# font: WEIGHT SIZE[/LH] var(--fam)   (the whole declaration, possibly on one line)
pat = re.compile(
    r"font:\s*([a-z0-9]+)\s+([^;{}]+?)\s*var\(--([a-z-]+)\)",
)


def repl(m: re.Match) -> str:
    weight, sizepart, fam = m.group(1), m.group(2).strip(), m.group(3)
    if "/" in sizepart:
        size, lh = sizepart.rsplit("/", 1)
        size, lh = size.strip(), lh.strip()
    else:
        size, lh = sizepart, None
    parts = [
        f"font-family: var(--{fam});",
        f"font-weight: {weight};",
        f"font-size: {size};",
    ]
    if lh:
        parts.append(f"line-height: {lh};")
    return "\n  ".join(parts)


out, n = pat.subn(repl, src)
print(f"converted {n} font shorthands")

# Move the composite stacks to body (next/font vars are defined on <body>).
stacks = """body {
  --display: var(--font-anton), "Anton", "Impact", "Arial Narrow", sans-serif;
  --ui: var(--font-inter), "Inter", system-ui, sans-serif;
  --script: var(--font-caveat), "Caveat", cursive;
  --mono: var(--font-geist-mono), ui-monospace, monospace;
  font-family: var(--ui);
}"""
out = out.replace(
    """  --display: var(--font-anton), "Anton", "Impact", "Arial Narrow", sans-serif;
  --ui: var(--font-inter), "Inter", system-ui, sans-serif;
  --script: var(--font-caveat), "Caveat", cursive;
  --mono: var(--font-geist-mono), ui-monospace, monospace;
""",
    "",
)
# insert body block right before the .site-root rule
out = out.replace(".site-root {", stacks + "\n\n.site-root {", 1)
# remove the now-duplicated font-family in .site-root
out = out.replace("""  color: var(--ink);
  font-family: var(--ui);
  font-size: 16px;""", """  color: var(--ink);
  font-size: 16px;""")

# safety: text in stat/label columns must wrap instead of clipping
out = out.replace(
    """.stat .t {
  font-family: var(--ui);
  font-weight: 700;
  font-size: 12px;
  line-height: 1.5;
  color: var(--mute);
}""",
    """.stat .t {
  font-family: var(--ui);
  font-weight: 700;
  font-size: 12px;
  line-height: 1.5;
  color: var(--mute);
  overflow-wrap: anywhere;
}""",
)

open(PATH, "w").write(out)
print("done")
