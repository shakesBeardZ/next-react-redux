const FontFaceObserver = require('fontfaceobserver');

const Fonts = () => {
  /* eslint-disable no-console */
  /* eslint-disable no-undef */
  const clearsansLink = document.createElement('link');
  clearsansLink.href = 'https://s3.amazonaws.com/mac-resources.kdanmobile.com/web_scource/font/ClearSans.css';
  clearsansLink.rel = 'stylesheet';

  const notosanstcLink = document.createElement('link');
  notosanstcLink.href = 'https://fonts.googleapis.com/earlyaccess/notosanstc.css';
  notosanstcLink.rel = 'stylesheet';

  const notosansjpLink = document.createElement('link');
  notosansjpLink.href = 'https://fonts.googleapis.com/earlyaccess/notosansjapanese.css';
  notosansjpLink.rel = 'stylesheet';

  const notosansscLink = document.createElement('link');
  notosansscLink.href = 'https://fonts.googleapis.com/earlyaccess/notosansscsliced.css';
  notosansscLink.rel = 'stylesheet';

  document.head.appendChild(clearsansLink);
  document.head.appendChild(notosanstcLink);
  document.head.appendChild(notosansjpLink);
  document.head.appendChild(notosansscLink);

  const clearsans = new FontFaceObserver('Clear Sans');
  const notosanstc = new FontFaceObserver('Noto Sans TC');
  const notosansjp = new FontFaceObserver('Noto Sans Japanese');
  const notosanssc = new FontFaceObserver('Noto Sans SC Sliced');

  clearsans.load().then(() => {
    console.log('clear sans');
  });

  notosanstc.load().then(() => {
    console.log('noto sans tc');
  });

  notosansjp.load().then(() => {
    console.log('noto sans jp');
  });

  notosanssc.load().then(() => {
    console.log('noto sans sc sliced');
  });
};

export default Fonts;
