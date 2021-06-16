import Typography from 'typography'
import funstonTheme from 'typography-theme-funston'

funstonTheme.googleFonts = [
  {
    name: 'Noto+Sans+JP',
    styles: ['400']
  }
]

const typography = new Typography(funstonTheme)

export default typography
