var sinon = require('sinon')
  , api = require('../../src/remark/api')
  , highlighter = require('../../src/remark/highlighter')
  , Slideshow = require('../../src/remark/models/slideshow')
  , utils = require('../../src/remark/utils')
  ;

describe('API', function () {
  it('should be exposed', function () {
    window.should.have.property('remark');
  });

  it('should expose highlighter', function () {
    api.highlighter.should.equal(highlighter);
  });

  it('should allow creating slideshow', function () {
    var html = document.createElement('html');
    var body = document.createElement('body');

    // Stub to prevent altering test runner DOM
    sinon.stub(utils, 'getHTMLElement').returns(html);
    sinon.stub(utils, 'getBodyElement').returns(body);
    sinon.stub(utils, 'setLocationHash');

    api.create().should.be.an.instanceOf(Slideshow);

    utils.getHTMLElement.restore();
    utils.getBodyElement.restore();
    utils.setLocationHash.restore();
  });
});
