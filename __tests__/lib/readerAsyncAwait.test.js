'use strict';

jest.mock('fs');

const reader = require('../../lib/readerAsyncAwait.js');

describe('File Reader Module with promises', () => {
  
  it('should return an error when given bad file info and quantity ', async () => {
    expect.assertions(1);
    let files = ['bad.txt'];
    await expect(reader(files)).toBe('Invalid Files')
    
  });

  it('should return an error when given bad file info and quantity ', async () => {
    expect.assertions(1);
    let files = ['bad.txt'];
    try {
      await reader(files);
    } catch(err) {
      console.log(err);
      expect(e).toMatch('Invalid Files')
    }
    
  });


  it('should return an array for data', async () => {
    expect.assertions(1);
    let files = ['file1.txt', 'file2.txt', 'file2.txt'];
    try {
      let data = await reader(files);
      expect(data instanceof Array).toBeTruthy();
    } catch (error) {
      
    }


  });

  it('should have File content inside the array', () => {
    expect.assertions(1);
    let files = ['file1.txt', 'file2.txt', 'file2.txt'];
    try {
      // let data = await reader(files);
      expect(data.length).toBe(3);
      expect(data).toContain('File Contents')
    } catch (error) {
      
    }
  });
});