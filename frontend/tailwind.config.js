/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {    
    extend: {colors:{
      midnight:'rgba(23, 33, 43, 1)',  
      mudblue:'rgba(0, 0, 0, 0.25)',
      skyblu:'rgba(250, 251, 255, 0.2)'    
    },},
    backgroundImage:{
      blugrad:'linear-gradient(129.35deg, #05B6EC 62.82%, #036786 101.24%)',
      
    },
    boxShadow:{
      mshadow: '15px 11px 14.8px -3px rgba(0, 0, 0, 0.25)'

    }
  },
  plugins: [],
}