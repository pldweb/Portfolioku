/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        bruno: ['Bruno Ace SC'], 
        space: ['Space Grotesk']
      },
      colors: { 
        primary: '#F5EF25',
        // dark: '#101010',
        dark: '#0e141b',
        description: '#7e8c9a',
        

      },
      backgroundColor: {
        // dark: '#101010',
        dark: '#0e141b',
        primary: '#F5EF25',
        card: '#1F262E',
        footer: '#262626',
      },
      fontSize: {
        logo: '28px',
      },
      borderRadius: {
        radiusDefault: '10px',
      }
    },
  },
  plugins: [],
}

