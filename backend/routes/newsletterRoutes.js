const express = require('express');
const router = express.Router();
const {
    subscribeNewsletter,
    getSubscribers,
    deleteSubscriber,
    sendNewsletter
} = require('../controllers/newsletterController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
    .post(subscribeNewsletter)
    .get(protect, admin, getSubscribers);

router.route('/send')
    .post(protect, admin, sendNewsletter);

router.route('/:id')
    .delete(protect, admin, deleteSubscriber);

module.exports = router;
