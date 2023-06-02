var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {

  describe('car', function() {

    describe('GET /car', function() {

      it('should return a Object with cars list', function(done) {

        request(server)
          .get('/car')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.be.a.Object();

            done();
          });
      });


    });

  });

});
