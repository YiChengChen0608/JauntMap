import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
.btn {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.background};
  border: none;
  box-shadow: ${({ theme }) => theme.effects.btn_shadow};
  cursor: pointer;
  &-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &-font {
    font-style: ${({ theme }) => theme.texts.font_style};
    font-weight: ${({ theme }) => theme.texts.font_weigth};
    font-size: ${({ theme }) => theme.texts.H7_TC.font_size};
    line-height: ${({ theme }) => theme.texts.H7_TC.line_height};
  }
  &-active {
    background: ${({ theme }) => theme.colors.Gradual};
    box-shadow: ${({ theme }) => theme.effects.btn_shadow2};
    .btn-icon path {
      stroke: ${({ theme }) => theme.colors.white};
      stroke-width: 0.1px;
      fill: ${({ theme }) => theme.colors.white};
    }
  }
}
`
