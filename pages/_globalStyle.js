import { injectGlobal } from 'styled-components';

const Styles = injectGlobal`
  &:lang(en) {
    font-family: 'Clear Sans', sans-serif;
  }
  &:lang(zh_tw) {
    font-family: 'Noto Sans TC', sans-serif;
  }
  &:lang(zh_cn) {
    font-family: 'Noto Sans SC Sliced', sans-serif;
  }
  &:lang(ja) {
    font-family: 'Noto Sans Japanese', sans-serif;
  }
`;

export default Styles;
