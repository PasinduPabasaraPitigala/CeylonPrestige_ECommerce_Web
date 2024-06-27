/*
/!*
// tailwind.config.js
module.exports = {
  content: [
    "./src//!*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};*!/

/!**@type {import('tailwindcss').Config}*!/
export default {
    content:[
        "./index.html",
        "./src/!**!/!*.{js,jsx,ts,tsx}",
    ],
    theme:{
        extend:{
            colors:{
                primary: '#f0f2f5',
                secondary: '#ff813f',
                tertiary: '#222222',
                slate:{
                    10:'#f1f3f4',
                },
                green:{
                    50: '#30AF58',
                    90: '#292C27'
                },
                gray:{
                    10:'#EEEEEE',
                    20:'#A2A2A2',
                    30:'#787878',
                    50:'#585858',
                    90:'#141414',
                },
            },
            backgroundImage:{
                wallpaper: "url('')"
            },
            screens:{
                xs: '400px',
                '3xl' : '1680px',
                '4xl' : '2200px',
            },
            maxWidth:{
                '10xl' : '1512px',
            },
            borderRadius:{
                '5xl':'40px',
            },
        },
    },
    plugin:[],
}*/

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f0f2f5",
        secondary: "#004953",
        tertiary: "#00897B",
        slate: {
          10: "#f1f3f4",
        },
        green: {
          50: "#30AF58",
          90: "#292C27",
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#787878",
          50: "#585858",
          90: "#141414",
        },
      },
      backgroundImage: {
        wallpaper: "url('/src/assets/images/newWallpaper.png')",
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },
    },
  },
  plugins: [],
};
