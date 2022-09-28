module.exports = {
  locales: ['__default', 'en', 'ja', 'ko'],
  defaultLocale: '__default',
  localesToIgnore: ['__default'],
  pages: {
    '*': ['common'],
  },
  interpolation: {
    prefix: '${',
    suffix: '}',
  },
  loadLocaleFrom: (locale, namespace) =>
    import(`./translations/${namespace}_${locale}`).then((m) => m.default),
}
