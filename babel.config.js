module.exports = {
  compact: true,
  comments: false,
  presets: [
    [
      '@babel/env', {
        useBuiltIns: 'entry',
        targets: {
          node: 'current',
          browsers: [
            'last 2 versions'
          ]
        },
        corejs: '3.0.1'
      }
    ]
  ],
  plugins: [
    '@babel/proposal-export-default-from'
  ]
}
