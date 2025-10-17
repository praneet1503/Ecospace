# Ecospace
A website that spreads awareness on sustainability.......
For the link,You can access it here:- <br>
<a href="https://praneet1503.github.io/Ecospace/"> Ecospace</a>

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Theme: ecospace-theme.css

I added a new theme file `styles/ecospace-theme.css` that applies a green/blue/white color palette and several lightweight CSS-only animations (animated gradient background, floating decorative blobs, hover lifts for cards and buttons, and reveal animations for sections).

How to enable
- The theme is imported in `pages/_app.js`. No additional steps needed.

Customizing colors
- Edit CSS variables at the top of `styles/ecospace-theme.css`:
	- `--eco-green` - primary green
	- `--eco-blue` - primary blue
	- `--eco-white` - white / text backgrounds

Notes
- The theme is intentionally lightweight and uses no external libraries.
- If you want the theme to override more styles, consider moving the link after other CSS files or use more specific selectors.
