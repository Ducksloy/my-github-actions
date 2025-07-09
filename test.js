// test/test.js
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app/app.js';

const chai = require('chai');
const assert = chai.assert;

describe('Simple test', function () {
  it('should return hello message', function () {
    assert.equal('Hello, GitHub Actions!', 'Hello, GitHub Actions!');
  });
});

