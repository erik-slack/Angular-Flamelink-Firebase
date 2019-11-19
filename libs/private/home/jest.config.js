module.exports = {
  name: 'private-home',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/private/home',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
