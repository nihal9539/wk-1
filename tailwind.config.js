const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animationDelay: {
        120: "120ms",
        1: "1s",
        250: "250ms",
        350: "350ms",
        450: "450ms",
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
        "first":"0px 0px 10px 0px #D175B6",
        "second":"0px 0px 30px 0px #D175B666"
      },
      colors: {
        'custom-default': '#D175B6',
        "background": "#00000080",
        "background2": "#00000003",
        "table-bg": " #0000004D",
        "btn-color": "#D85AD8",
        "btn-shadow-clr": "#FF00FF4D"
      },
      animation: {
        "eclips-1": "animate 40s linear infinite ",
        "eclips-2": "animateTwo 40s linear infinite"
      },
      keyframes: {
        animateTwo: {

          "0%": {
            transform: "translate(250%,-100px)"

          },
          " 25%": {
            transform: "translate(-100px,-100px) "
          },
          " 50%": {
            transform: "translate(-100px,150%)"
          },
          " 75%": {
            transform: "translate(250%,150%)"
          },
          " 100%": {
            transform: "translate(250%,-100px)"
          },
        },
        animate: {
          " 0%": {
            transform: "translate(0,140%)"
          },
          " 25%": {
            transform: "translate(250%,140%)"
          },
          "50%": {
            transform: "translate(250%,-100px)"
          },
          " 75%": {
            transform: "translate(0,-100px) "
          },
          " 100%": {
            transform: "translate(0,150%)"
          }

        },
      },
      boxShadow: {
        "box-shadow": "0px 0px 30px 0px #D175B633",
        "custom": '0px 30px 90px rgba(0,_0,_0,_0.4)',
        "btn-shadow": "0px 30px 80px 0px #FF00FF4D",
        "btn-inset": " 0px 0px 20px 0px #00000099 inset",
        "assign-box-shadow": " 0px 0px 30px 0px #FFFFFF33",
        "radio-box-shadow": "0px 0px 10px 0px #D175B6",
        "event-box-shadow": " 0px 0px 10px 0px rgba(209, 117, 182, 1)",
        "event-text-shadow": " 0px 0px 30px 0px #D175B666",
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
    function ({addUtilities}){
      const newUtilities = {
        ".scrollbar-thin":{
          scrollbarWidth:"thin",
          scrollbarColor:"rgb(31 29 29) white"
        },
        ".scrollbar-webkit":{
          "&::-webkit-scrollbar":{
            width:"8px"
          },
          "&::-webkit-scrollbar-track":{
            background:"white"
          },
          "&::-webkit-scrollbar-thumb":{
            background:"red",
            borderRadius:"20px",
            border:"1px solid white"
          },
        }
      }
      addUtilities(newUtilities,["responsive","hover"])
    }

  ],
}