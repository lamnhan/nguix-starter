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
    'docs/content/components/header2nd.md': {main: ['Header2ndComponent', 'FULL']},
    'docs/content/components/footer.md': {main: ['FooterComponent', 'FULL']},
    'docs/content/components/oops.md': {main: ['OopsComponent', 'FULL']},
    'docs/content/components/oauth-popup.md': {main: ['OauthPopupComponent', 'FULL']},
    'docs/content/components/nav-indicator.md': {main: ['NavIndicatorComponent', 'FULL']},
    'docs/content/components/pwa-box.md': {main: ['PwaBoxComponent', 'FULL']},
    'docs/content/components/pwa-reminder.md': {main: ['PwaReminderComponent', 'FULL']},
    'docs/content/components/content.md': {main: ['ContentComponent', 'FULL']},
  }
};
