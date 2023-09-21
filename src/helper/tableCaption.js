import plugin from "tailwindcss";

const tableCaption = plugin(function ({ addUtilities }) {
  addUtilities({
    ".caption-bottom": {
      "caption-side": "bottom",
    },
    ".caption-top": {
      "caption-side": "top",
    },
  });
});

module.exports = tableCaption;
