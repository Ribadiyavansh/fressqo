require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log('Connected to MongoDB');
        const result = await User.updateMany({}, { role: 'admin' });
        console.log(`Updated ${result.modifiedCount} users to admin role.`);
        process.exit();
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
