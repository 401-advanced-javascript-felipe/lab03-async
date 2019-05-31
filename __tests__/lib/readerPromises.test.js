'use strict';

jest.mock('fs');

const reader = require('../../lib/readerPromises.js');

describe('File Reader Module with promises', () => {

  it('should return an error when given bad file info and quantity ', () => {
    let files = ['bad.txt'];
    return expect(reader(files)).rejects.toMatch('Invalid File');
  });

  it('should return an array for data', () => {
    let files = ['file1.txt', 'file2.txt', 'file2.txt'];
    return reader(files).then(data => {
      expect(data instanceof Array).toBeTruthy();
      expect(data.length).toBe(3);
    });
  });

  it('should have File content inside the array', () => {
    let files = ['file1.txt', 'file2.txt', 'file2.txt'];
    return expect(reader(files)).resolves.toContain('File Contents');
  });

});
