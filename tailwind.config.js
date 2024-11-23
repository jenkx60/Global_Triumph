/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },

    backgroundImage: {
      // 'hero': "url('/src/assets/images/hero.jpg')",
      'footer': "url('./src/assets/brick 6.png')"
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },

    fontFamily: {
      raleway: ['"Raleway"', "sans-serif"],
      poppins: ['"Poppins"', "sans-serif"],
      lato: ['"Lato"', "sans-serif"],
    },

    // colors: {
    //   primary: '#BBD51A',
    //   secondary: '#26683C',
    // },

    screens: {
      'sm': '640px', // => @media (min-width: 640px)
      'md': '768px', // => @media (min-width: 768px)
      'lg': '1024px', // => @media (min-width: 1024px)
      'xl': '1280px', // => @media (min-width: 1280px)
      '2xl': '1536px', // => @media (min-width: 153px)
    }
    // width: {
    // //   // width5: '50%',
    // //   // width3: '33.33%',
    // //   // width7: '66.66%',
    // //   // width8: '75%',
    // //   // width2: '25%',
    //   'full': '100%',
    // //   // width1: '20%',
    // //   // width4: '40%',
    // //   // width6: '60%',
    //   width9: '80%',
    // },

    // height: {
    // //   // height5: '50%',
    // //   // height3: '33.33%',
    // //   // height7: '66.66%',
    // //   // height8: '75%',
    // //   // height2: '25%',
    //   'full': '100%',
    // //   // height1: '20%',
    // //   // height4: '40%',
    // //   // height6: '60%',
    //   height9: '80%',
    // }
  },
  plugins: [],
}

