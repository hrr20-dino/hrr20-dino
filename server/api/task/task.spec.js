var expect = require('chai').expect;
var server = require('../../server.js');
var path = require('path');
var supertest = require('supertest');

var request = supertest.agent(server);

describe('server', function() {
  describe('GET /task/Joust', function () {
    it('should return the content of joust', function (done) {
      request
        .get('/task/Joust')
        .expect(200, done);


    })
  });
});
  // describe('archived websites', function () {
  //   describe('GET', function () {
  //     it('should return the content of a website from the archive', function (done) {
  //       var fixtureName = 'www.google.com';
  //       var fixturePath = archive.paths.archivedSites + '/' + fixtureName;

  //       // Create or clear the file.
  //       var fd = fs.openSync(fixturePath, 'w');
  //       fs.writeSync(fd, 'google');
  //       fs.closeSync(fd);

  //       // Write data to the file.
  //       fs.writeFileSync(fixturePath, 'google');

  //       request
  //         .get('/' + fixtureName)
  //         .expect(200, /google/, function (err) {
  //           fs.unlinkSync(fixturePath);
  //           done(err);
  //         });
  //     });

  //     it('Should 404 when asked for a nonexistent file', function(done) {
  //       request.get('/arglebargle').expect(404, done);
  //     });
  //   });

    // describe('POST', function () {
    //   it('should append submitted sites to \'sites.txt\'', function(done) {
    //     var url = 'www.example.com';

    //     // Reset the test file and process request
    //     fs.closeSync(fs.openSync(archive.paths.list, 'w'));

    //     request
    //       .post('/')
    //       .type('form')
    //       .send({ url: url })
    //       .expect(302, function (err) {
    //         if (!err) {
    //           var fileContents = fs.readFileSync(archive.paths.list, 'utf8');
    //           expect(fileContents).to.equal(url + '\n');
    //         }

    //         done(err);
    //       });
    //   });
    // });
//   });
// });

