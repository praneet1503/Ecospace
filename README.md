# Ecospace
A website that spreads awareness on sustainability.......
For the link,You can access it here:- <br>
<a href="https://praneet1503.github.io/Ecospace/"> Ecospace</a>


## Theme: ecospace-theme.css

I added a new theme file `ecospace-theme.css` (also copied into `Ecospace-1.0.0/ecospace-theme.css`) that applies a green/blue/white color palette and several lightweight CSS-only animations (animated gradient background, floating decorative blobs, hover lifts for cards and buttons, and reveal animations for sections).

How to enable
- The root `index.html` and `Ecospace-1.0.0/index.html` have been updated to include the theme via a <link rel="stylesheet" href="ecospace-theme.css"> tag. No build or install steps required — just open the HTML file in a browser.

Customizing colors
- Edit CSS variables at the top of `ecospace-theme.css`:
	- `--eco-green` - primary green
	- `--eco-blue` - primary blue
	- `--eco-white` - white / text backgrounds

Notes
- The theme is intentionally lightweight and uses no external libraries.
- If you want the theme to override more styles, consider moving the link after other CSS files or use more specific selectors.
