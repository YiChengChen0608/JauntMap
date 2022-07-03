import 'styled-components'

interface Color {
  black: string,
  black_light: string,
  gray_dark: string,
  gray_light: string,
  white: string,
  background: string,
  blue_green: string,
  blue: string,
  Gradual: string
}

interface HeadText {
  font_size: string,
  line_height: string
}

interface Text {
  font_style: string,
  font_weigth: number,
  font_sans: string,
  font_roboto: string,
  font_roboto_url: string,
  font_color: string,
  H2_TC: HeadText,
  H3_TC: HeadText,
  H4_TC: HeadText,
  H5_TC: HeadText,
  H6_TC: HeadText,
  H6_EN: HeadText,
  H7_TC: HeadText,
  H7_EN: HeadText,
  H8_TC: HeadText,
  H8_EN: HeadText
}

interface Effect {
  background: string,
  btn_shadow: string,
  btn_shadow2: string,
  card_shadow: string,
  Form: string,
  card_shadow_dark: string,
  btn_shadow2_dark: string,
  btn_shadow_dark: string,
  btn_shadow3_dark: string
}

interface Breakpoint {
  xs: string,
  md: string,
  lg: string,
  xl: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    texts: Text,
    colors: Color,
    effects: Effect,
    breakpoint: Breakpoint
  }
}
