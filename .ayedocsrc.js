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
    'docs/content/components/header.md': {main: ['NguixHeaderComponent', 'FULL']},
    'docs/content/components/header2nd.md': {main: ['NguixHeader2ndComponent', 'FULL']},
    'docs/content/components/footer.md': {main: ['NguixFooterComponent', 'FULL']},
    'docs/content/components/oops.md': {main: ['NguixOopsComponent', 'FULL']},
    'docs/content/components/oauth-popup.md': {main: ['NguixOauthPopupComponent', 'FULL']},
    'docs/content/components/nav-indicator.md': {main: ['NguixNavIndicatorComponent', 'FULL']},
    'docs/content/components/pwa-box.md': {main: ['NguixPwaBoxComponent', 'FULL']},
    'docs/content/components/pwa-reminder.md': {main: ['NguixPwaReminderComponent', 'FULL']},
    'docs/content/components/content.md': {main: ['NguixContentComponent', 'FULL']},
  }
};
