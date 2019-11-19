module.exports = {
  name: 'public-login',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/public/login',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
