var expect = require('chai').expect;
var request = require('request');

describe('<example_describe>', function() {
    it('<example_test>', function (done) {
        request('http://localhost:8080', function (error, response, body) {
            expect(body).to.equal('Hello World');
            done();
        });
    });
});
