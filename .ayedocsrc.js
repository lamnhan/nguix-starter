module.exports = {
  url: 'https://nguix-starter.lamnhan.com/content/reference',
  srcPath: './projects/starter/src',
  cleanOutput: true,
  webRender: {
    out: 'docs/content',
  },
  fileRender: {
    'README.md': {
      cleanOutput: false,
      template: 'angularx'
    },
    // components
    'docs/content/components/header.md': {main: ['HeaderComponent', 'FULL']},
    // 'docs/content/components/header2nd.md': {main: ['Header2ndComponent', 'FULL']},
    'docs/content/components/footer.md': {main: ['FooterComponent', 'FULL']},
  }
};
