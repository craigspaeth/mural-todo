export const type = (style) => {
  return {
    header: {
      fontFamily: 'Helvetica; sans-serif',
      fontSize: '24px'
    },
    body: {
      fontFamily: 'Helvetica'
    }
  }[style]
}
