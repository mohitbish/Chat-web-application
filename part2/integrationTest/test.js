var assert = require('assert');
var app = require('../server/server');

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);

describe('Server test', function() {
    // The function passed to before() is called before running the test cases.
    before(function() {
        console.log("before test");
    });

    // The function passed to after() is called after running the test cases.
    after(function() {
        console.log("after test");
    });

    describe('/getusers', () => {
        it('it should GET all the users', (done) => {
            chai.request(app)
                .get('/getusers')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });

    describe('/login', () => {
        it('it should return the user', (done) => {
            chai.request(app).post('/login').type('form').send({Username:"Mohit", Password: 222})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.user.should.have.property('Username');
                    res.body.user.should.have.property('Role');
                    res.body.user.should.have.property('Email');
                    res.body.should.be.a('object');
                    done();
                });
        });
    });


    describe('/adduser', () => {
        it('it should indert a doc', (done) => {
            chai.request(app).post('/adduser').type('form').send({Username: "itest", Email: "i@g.com", Role: "user", Password: "" })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.product.should.have.property('Name');
                    res.body.product.should.have.property('Price');
                    res.body.product.should.have.property('units');
                    res.body.product.should.have.property('Description');
                    done();
                });
        });
    });


});