import Typography from 'typography'
import funstonTheme from 'typography-theme-funston'

funstonTheme.googleFonts = [
  {
    name: 'Noto+Sans+JP',
    styles: ['400']
  }
]

funstonTheme.headerFontFamily = ['Noto Sans JP']
funstonTheme.bodyFontFamily = ['Noto Sans JP']

const typography = new Typography(funstonTheme)

export default typography
