module.exports = {
  name: 'angular-flamelink',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-flamelink',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
