module.exports = {
  name: 'public-landing',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/public/landing',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
