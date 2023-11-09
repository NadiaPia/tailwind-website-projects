module.exports = {
  content: ['./*.html'],
  screens: {
    sm:'480px',
    md: '768px',
    lg: '976px',
    xl: '1440px'
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow Semi Condenced', 'sans-serif'],        
      },
      spacing: {
        128: '32rem',
      }
    },
  },
  plugins: [],
}
