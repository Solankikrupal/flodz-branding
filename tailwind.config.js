/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "black-grey": "#1E1E1E",
        "wheat-white": "#F3EFEF",
        "btn-purple": "#8E64FF",
        "btn-secondary": "#ffffff0a",
        "title-tag":"#D9D9D9",
        "title-gradient":
          "linear-gradient(124deg, rgba(0, 0, 0, 0.00) 0%, #63E 23.63%, #FFF 100%)",
      },
      linearGradientColors: {
        "text-gradient": [
          "124deg",
          "rgba(0, 0, 0, 0.00) 0%",
          "#63E 23.63%",
          "#FFF 100%",
        ],
      },
      backgroundImage: {
        "hero-pattern": "url('/public/images/hero-bg.png')",
        "footer-texture": "url('/img/footer-texture.png')",
        gradient:
          "linear-gradient(124deg, rgba(0, 0, 0, 0.00) 0%, #63E 23.63%, #FFF 100%)",
      },
      backgroundColor: {
        "custom-bg": "lightgray", // Add your custom background color here
      },
      backgroundSize: {
        "custom-size": "100.528% 100.135%", // Add your custom background size here
      },
      fontFamily: {
        serif: ["Inter"],
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2.5rem",
        xl: "2.5rem",
        "2xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
