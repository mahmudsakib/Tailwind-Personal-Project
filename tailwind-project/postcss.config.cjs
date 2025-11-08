// Use the new PostCSS plugin package for Tailwind v4
// See: Tailwind v4 migration note — the PostCSS plugin was moved to @tailwindcss/postcss
module.exports = {
  plugins: [
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
  ],
};
