module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        gradient01:
          "url('/Users/jexica/Sync/CODE/GA/gjam/client/src/images/gradient-1.png')",
        gradient06:
          "url('/Users/jexica/Sync/CODE/GA/gjam/client/src/images/gradient-6.png')",
        gradient08:
          "url('/Users/jexica/Sync/CODE/GA/gjam/client/src/images/gradient-8.png')",
      },
      fontFamily: {
        "gt-america": ["GT America"],
        "gt-mono": ["GT America Mono"],
      },
      spacing: {
        128: "32rem",
        132: "34rem",
        140: "40rem",
        150: "50rem",
        180: "90rem",
        container: "1700px",
      },
      cursor: {
        star: "url('/Users/jexica/Sync/CODE/GA/gjam/client/src/images/star-cursor.png'), default",
      },
      animation: {
        "bounce-slow": "bounce-slow 1s ease-in-out infinite",
        movebg: "20s linear infinite alternate",
        fadein: "fadein 5.25s",
        "fadein-02": "fadein 7s",
        "fadein-03": "fadein 9s",
      },
      keyframes: {
        "bounce-slow": {
          "0%, 100%": {
            transform: "translateY(-10%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, .5, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic - bezier(0, 0, 0.1, 1)",
          },
        },
        fadein: {
          "0%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "fadein-02": {
          "0%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "fadein-03": {
          "0%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
      },
    },
    lineHeight: {
      12: "3rem",
      13: "4rem",
      15: "5rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
