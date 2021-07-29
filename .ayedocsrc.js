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
    'docs/content/components/header.md': {main: ['HeaderComponent', 'SUMMARY_PROPERTIES']},
    'docs/content/components/header2nd.md': {main: ['Header2ndComponent', 'SUMMARY_PROPERTIES']},
    'docs/content/components/tabs.md': {main: ['TabsComponent', 'SUMMARY_PROPERTIES']},
    'docs/content/components/footer.md': {main: ['FooterComponent', 'SUMMARY_PROPERTIES']},
    'docs/content/components/oops.md': {main: ['OopsComponent', 'SUMMARY_PROPERTIES']},
    'docs/content/components/spinner.md': {main: ['SpinnerComponent', 'SUMMARY_PROPERTIES']},
    'docs/content/components/icon.md': {main: ['IconComponent', 'SUMMARY_PROPERTIES']},
    'docs/content/components/content.md': {main: ['ContentComponent', 'SUMMARY_PROPERTIES']},
    'docs/content/components/nav-indicator.md': {main: ['NavIndicatorComponent', 'SUMMARY_PROPERTIES']},
    'docs/content/components/pwa-box.md': {main: ['PwaBoxComponent', 'SUMMARY_PROPERTIES']},
    'docs/content/components/pwa-reminder.md': {main: ['PwaReminderComponent', 'SUMMARY_PROPERTIES']},
    'docs/content/components/share.md': {main: ['ShareComponent', 'SUMMARY_PROPERTIES']},
    'docs/content/components/login.md': {main: ['LoginComponent', 'SUMMARY_PROPERTIES']},
    'docs/content/components/register.md': {main: ['RegisterComponent', 'SUMMARY_PROPERTIES']},
    'docs/content/components/account.md': {main: ['AccountComponent', 'SUMMARY_PROPERTIES']},
    'docs/content/components/posts.md': {main: ['PostsComponent', 'SUMMARY_PROPERTIES']},
    'docs/content/components/post.md': {main: ['PostComponent', 'SUMMARY_PROPERTIES']},
    // pages
    'docs/content/pages/oauth-popup.md': {main: ['OauthPopupPage', 'SUMMARY_PROPERTIES']},
    'docs/content/pages/oops.md': {main: ['OopsPage', 'SUMMARY_PROPERTIES']},
    'docs/content/pages/terms.md': {main: ['TermsPage', 'SUMMARY_PROPERTIES']},
    'docs/content/pages/privacy.md': {main: ['PrivacyPage', 'SUMMARY_PROPERTIES']},
    'docs/content/pages/setting.md': {main: ['SettingPage', 'SUMMARY_PROPERTIES']},
  }
};
