require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log('Connected to MongoDB');

        // Delete all users except the master admin
        const result = await User.deleteMany({ email: { $ne: 'admin@fresqo.com' } });
        console.log(`Successfully deleted ${result.deletedCount} test user(s) from the database.`);
        process.exit();
    })
    .catch(err => {
        console.error('Database connection error:', err);
        process.exit(1);
    });
