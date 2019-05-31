'use strict';

jest.mock('fs');

const fileReader = require('../../lib/readerAsyncAwait.js');

describe('File Reader Module with async', () => {

  it('should return an error when given bad file info', async () => {
    expect.assertions(1);
    // Arrange
    let files = ['bad.txt'];

    // Act and Assert
    try{
      await fileReader(files);
    } catch(e){
      expect(e).toMatch('Invalid File');
    }
  });

  it('should return an array', async () => {
    expect.assertions(1);
    // Arrange
    let files = ['file1.txt', 'file2.txt', 'file2.txt'];

    // Act
    let result = await fileReader(files);

    // Assert
    expect(result).toBeInstanceOf(Array);

  });

  it('should have file content inside of the array', async () => {
    expect.assertions(1);
    // Arrange
    let files = ['file1.txt', 'file2.txt', 'file2.txt'];

    // Act
    let result = await fileReader(files);

    // Assert
    expect(result).toContain('File Contents');
  });

});
