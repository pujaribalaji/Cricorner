const express = require('express');
const session = require('express-session');
const router = express.Router();
const cricketController = require('../controllers/cricketcontroller');

/**
 * app routes
 */


router.get('/', cricketController.homepage);
router.get('/categories', cricketController.exploreCategories);

router.get('/members/:id', cricketController.exploreMembers);
router.post('/search', cricketController.searchmember);
router.get('/players', cricketController.explorePlayers);
router.get('/signup', cricketController.exploreSignup);
// router.get('/othergames', cricketController.exploreOthergames);

module.exports = router;