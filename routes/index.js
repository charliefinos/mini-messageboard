var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hello There!",
    user: "Carlos",
    added: new Date()
  },
  {
    text: "Hi!",
    user: "Pibe",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Messages', messages: messages });
});

router.get('/new', function(req, res, next){
  res.render('form', {title: 'New message'})
})

router.post('/new', function(req, res, next){
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date()
  });
  res.redirect('/');
})
module.exports = router;
