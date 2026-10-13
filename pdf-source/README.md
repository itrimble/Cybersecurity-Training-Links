# Roadmap PDF source

Build inputs for the graphics in `public/Cybersecurity-Career-Roadmap-2026.pdf`:
Mermaid diagrams (`.mmd`), Vega-Lite specs (`.vl.json`) and the image
generator (`generate-ai-images.py`).

These used to sit in `public/pdf-assets/src/`, which meant Vite copied them
into `dist/` and served them from the web root. They are build inputs, not
web assets, so they live outside `public/` now. The rendered `.png` and
`.svg` outputs stay in `public/pdf-assets/`, because the PDF references them.

Also here: `Cybersecurity-Career-Roadmap-2026.md` (content) and
`.typ` (1,397-line Typst layout), which compile to the PDF. Their
`#image()` calls were relative to `public/`, so they now point at
`../public/pdf-assets/`. Only the rendered `.pdf` stays in `public/`.
