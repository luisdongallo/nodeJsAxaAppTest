var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
//import * as contactModel from '/models/contacts.js';
var contacts = require('./models/contacts');
 

var appExpress = express();

/*
var logger = (req, res, next) => {
    console.log('Logging...');
    next();
};

appExpress.use(logger);
*/
/*
appExpress.set('model engine', 'js');
var modelPath = path.join(__dirname, 'models');
appExpress.set('models', modelPath);
*/

appExpress.set('view engine', 'ejs');
var viewPath = path.join(__dirname, 'views');
appExpress.set('views', viewPath);

appExpress.use(bodyParser.json());
appExpress.use(bodyParser.urlencoded({
    extended: false
}));

appExpress.use(express.static(path.join(__dirname, 'public')));

var contactModel = contacts;
contactModel.firstName = '';
contactModel.lastName = '';
contactModel.id = '';
contactModel.type = '';

var contactList = [contactModel];

for(var i = 0; i < contactList.length; i++)
{
    contactList[i] = contactModel;
}

console.log(contactList);

var contact = [
    {
        firstName: 'Luis',
        lastName: 'Dongallo',
        id: 1,
        type: 'Employee'
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        id: 2,
        type: 'Client'
    }
];

console.log(contact);

appExpress.get('/', (req, res) => {
    
    //var data = 'Data here';
    var data = contact;
    //res.send(data);
    //res.json(contact);
    res.render('index', {
        title: 'Contacts',
        contacts: contact
    });   
});

appExpress.post('/contacts/add', (req, res) => {
    
    var contacts = {
        id: 100,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        type: req.body.type
    };

    console.log(contacts);
});

appExpress.listen(3000, () => {
    console.log('Server started on port 3000...');
});