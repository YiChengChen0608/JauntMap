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
export interface Theme {
  texts: Text,
  colors: Color,
  effects: Effect,
  breakpoint: Breakpoint
}

export const theme: Theme = {
  breakpoint: {
    xs: '375px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  },
  texts: {
    font_style: 'normal',
    font_weigth: 400,
    font_sans: 'Noto Sans TC',
    font_roboto: 'Roboto',
    font_roboto_url: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;1,900&display=swap%27',
    font_color: '#000000',
    H2_TC: {
      font_size: '24px',
      line_height: '24px'
    },
    H3_TC: {
      font_size: '22px',
      line_height: '24px'
    },
    H4_TC: {
      font_size: '20px',
      line_height: '18px'
    },
    H5_TC: {
      font_size: '18px',
      line_height: '27px'
    },
    H6_TC: {
      font_size: '16px',
      line_height: '24px'
    },
    H6_EN: {
      font_size: '16px',
      line_height: '24px'
    },
    H7_TC: {
      font_size: '14px',
      line_height: '21px'
    },
    H7_EN: {
      font_size: '14px',
      line_height: '21px'
    },
    H8_TC: {
      font_size: '12px',
      line_height: '12px'
    },
    H8_EN: {
      font_size: '12px',
      line_height: '12px'
    }
  },
  colors: {
    black: '#373A43',
    black_light: '#646466',
    gray_dark: '#ACABB0',
    gray_light: '#D7D7D9',
    white: '#FFFFFF',
    background: '#F3F4F6',
    blue_green: '#38D0B7',
    blue: '#35B3EA',
    Gradual: 'linear-gradient(180deg, #38D0B7 0%, #35B3EA 100%)'
  },
  effects: {
    background: '#C4C4C4',
    // box_shadow
    btn_shadow: '-2px -2px 2px #FFFFFF, 0px 0px 5px #D4DBEA',
    btn_shadow2: '0px 2px 5px #C0C7D0',
    card_shadow: '-3px -2px 2px #FFFFFF, 0px 2px 8px #D4DBEA',
    Form: 'inset 4px 1px 5px #D4DBEA, inset -1px 0px 2px #FFFFFF',
    card_shadow_dark: '-3px -2px 2px rgba(255, 255, 255, 0.08), 0px 2px 8px rgba(0, 0, 0, 0.4)',
    btn_shadow2_dark: '0px 2px 5px rgba(0, 0, 0, 0.4)',
    btn_shadow_dark: '-2px -1px 2px rgba(255, 255, 255, 0.08), 0px 0px 5px rgba(0, 0, 0, 0.4)',
    btn_shadow3_dark: '-2px -1px 2px rgba(255, 255, 255, 0.08), 0px 2px 8px rgba(0, 0, 0, 0.4)'
  }

}
