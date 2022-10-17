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
        it('it should add a user', (done) => {
            chai.request(app).post('/adduser').type('form').send({Username: "itest", Email: "i@g.com", Role: "user", Password: 222 })
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

    describe('/addgroup', () => {
        it('it should add a group', (done) => {
            chai.request(app).post('/addgroup').type('form').send({Groupname: "test", Channellist: [], userlist: [] })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.ok = true   
                    res.body.group.should.have.property('Groupname');
                    done();
                });
        });
    });

    describe('/removegroup', () => {
        it('it should remove a doc and send the rest', (done) => {
            chai.request(app).post('/removegroup').type('form').send({ Groupname: "test", userlist : [], Channellist: []})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });

    describe('/getgroups', () => {
        it('it should GET all the groups', (done) => {
            chai.request(app)
                .get('/getgroups')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });

    describe('/removeuser', () => {
        it('it should remove a user and send the rest', (done) => {
            chai.request(app).post('/removeuser').type('form').send({Username: "itest", Email: "i@g.com", Role: "user", Password: 222 })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });

    
    describe('/getupdateuser', () => {
        it('it should get a user', (done) => {
            chai.request(app).post('/getupdateuser').type('form').send({Username: "Mohit", Email: "m@g.com", Role: "superadmin", Password: 222 })
                .end((err, res) => {
                    res.should.have.status(200);  
                    res.body.should.be.a('object');
                    done();
                });
        });
    });

    describe('/updateuser', () => {
        it('it should upadte get a user', (done) => {
            chai.request(app).post('/updateuser').type('form').send({new : {Username: "Mohit", Email: "M@g.com", Role: "superadmin", Password: 222 }, old: {Username: "Mohit", Email: "m@g.com", Role: "superadmin", Password: 222 }})
                .end((err, res) => {
                    res.should.have.status(200);  
                    res.body.ok = true   
                    res.body.user.should.have.property('Username');
                    res.body.user.should.have.property('Role');
                    res.body.user.should.have.property('Email');
                    res.body.should.be.a('object');
                    done();
                });
        });
    });

    describe('/addchannel', () => {
        it('it should add a channel', (done) => {
            chai.request(app).post('/addchannel').type('form').send( {new : {Groupname: "test", Channellist: [{Channelname: "test", Userlist : [], chatList: []}], userlist: [] }, old: {Groupname: "test", Channellist: [], userlist: [] }})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.ok = true   
                    res.body.Group.should.have.property('Groupname');
                    res.body.Group.should.have.property('Channellist');
                    res.body.should.be.a('object');
                    done();
                });
        });
    });




});