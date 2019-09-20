const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', function() {

  it("should return an empty string when passed an empty string", function() {
    const answer = nameInverter("");
    assert.equal(answer, "", "yay");
  });

  it("should return a single name when passed a single name", function() {
    const answer = nameInverter("john");
    assert.equal(answer, "john", "yay");
    console.log(answer);
  });

  it("should return a single name when passed a single name with extra spaces", function() {
    const answer = nameInverter("  john ");
    assert.equal(answer, "john", "yay");
  });

  it("should return last, first when passed both names", function() {
    const answer = nameInverter("john gregorinko");
    assert.equal(answer, "gregorinko, john", "yay");
  });
});
