const express = require('express');
const QuestionModel = require('../models/question');

const router = express.Router();

const passport = require('passport');

router.get('/', (req, res) => {
  console.log(req.session);

  res.send({
    success: true,
    user: req.user,
  });
});

router.get('/protected', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.send('you\'re in');
});

/** gets the 15 most recent questions */
router.get('/getRecent', (req, res) => {
  let query = QuestionModel.find({}).sort({_id: 'desc'}).limit(15);

  query.exec((err, questions) => {
    if (err) {
      console.error(err);
    }

    questions = questions.map((question) => {
      return {
        _id: question._id,
        createdAt: question._id.getTimestamp(),
        question: question.question,
        answers: question.answers,
      };
    });

    res.send(questions);
  });
});

/** gets a random unanswered question */
router.get('/randomQuestion', (req, res) => {
  QuestionModel.findOneRandom({answers: {$size: 0}}, {}, {}, (err, question) => {
    if (err) {
      console.error(err);
    }

    question = {
      _id: question._id,
      question: question.question,
    }

    res.send(question);
  });
});

/** asks a question
 * @param {string} question Question being asked to the internet */
router.post('/ask', (req, res) => {
  let question = {question: req.body.question};

  let questionModel = new QuestionModel(question);

  questionModel.save((err, question) => {
    if (err) {
      console.error(err);
    }

    res.end();
  });
});

/** answers a question
 * @param {string} _id Question id
 * @param {string} answer Answer to the question
 */
router.put('/answer', (req, res) => {
  let {_id, answer} = req.body;

  QuestionModel.update({_id}, {$push: {answers: {answer}}}, (err, success) => {
    if (err) {
      console.error(err);
    } else {
      console.log(success);
    }
  });


  res.end();
});




module.exports = router;