import '@testing-library/jest-dom';
import expectedNodeVersion from '../../node_version';

test('node.js version matches', () => {
  var nodeVersion = process.version;
  nodeVersion = nodeVersion.substring(1);

  expect(nodeVersion).toEqual(expectedNodeVersion);
});

