/* eslint-disable no-undef */
import assert from 'assert';
import jsdom from 'jsdom';
import fs from 'fs';

const { JSDOM } = jsdom;

describe('Array', () => {
  describe('#indexOf', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('index.html', () => {
  describe('#helloWorld', () => {
    it("should return 'Hello World'", () => {
      const index = fs.readFileSync('./src/index.html', 'utf-8');
      const dom = new JSDOM(index);
      const h1 = dom.window.document.querySelector('h1').textContent;
      assert.equal(h1, 'Hello World');
    });
  });
});
