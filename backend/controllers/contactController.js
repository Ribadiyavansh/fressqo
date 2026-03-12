const nodemailer = require('nodemailer');

const sendContactEmail = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER || 'fresqo.in@gmail.com',
                pass: process.env.EMAIL_PASS || 'your_app_password_here'
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER || 'fresqo.in@gmail.com',
            to: 'fresqo.in@gmail.com',
            subject: `Contact Form Submission: ${subject}`,
            html: `
                <h3>New Contact Message</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { sendContactEmail };
