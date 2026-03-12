const NewsletterSubscriber = require('../models/NewsletterSubscriber');
const nodemailer = require('nodemailer');

// @desc    Subscribe to newsletter
// @route   POST /api/newsletter
// @access  Public
const subscribeNewsletter = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: 'Please provide an email' });
        }

        const subscriberExists = await NewsletterSubscriber.findOne({ email });

        if (subscriberExists) {
            return res.status(400).json({ message: 'Email is already subscribed' });
        }

        const subscriber = await NewsletterSubscriber.create({ email });

        res.status(201).json({ message: 'Subscribed successfully', subscriber });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Get all subscribers
// @route   GET /api/newsletter
// @access  Private/Admin
const getSubscribers = async (req, res) => {
    try {
        const subscribers = await NewsletterSubscriber.find({}).sort({ subscribedAt: -1 });
        res.json(subscribers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Remove subscriber
// @route   DELETE /api/newsletter/:id
// @access  Private/Admin
const deleteSubscriber = async (req, res) => {
    try {
        const subscriber = await NewsletterSubscriber.findById(req.params.id);

        if (subscriber) {
            await subscriber.deleteOne();
            res.json({ message: 'Subscriber removed' });
        } else {
            res.status(404).json({ message: 'Subscriber not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Send newsletter to all subscribers
// @route   POST /api/newsletter/send
// @access  Private/Admin
const sendNewsletter = async (req, res) => {
    try {
        const { subject, message, type } = req.body;
        const subscribers = await NewsletterSubscriber.find({});
        const emails = subscribers.map(sub => sub.email);

        if (emails.length === 0) {
           return res.status(400).json({ message: 'No subscribers found' });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER || 'fresqo.in@gmail.com',
                pass: process.env.EMAIL_PASS || 'your_app_password_here'
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER || 'fresqo.in@gmail.com',
            bcc: emails,
            subject: subject,
            html: `
                <h3>Fresqo ${type ? type.charAt(0).toUpperCase() + type.slice(1) : 'News'} Update</h3>
                <p>${message}</p>
            `
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Newsletter sent to all subscribers' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    subscribeNewsletter,
    getSubscribers,
    deleteSubscriber,
    sendNewsletter
};
