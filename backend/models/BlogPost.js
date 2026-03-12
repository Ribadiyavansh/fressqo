const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    content: {
        type: String,
        required: [true, 'Please add content']
    },
    thumbnail: {
        type: String,
        required: [true, 'Please add a thumbnail image']
    },
    author: {
        type: String,
        required: [true, 'Please add an author name']
    },
    tags: {
        type: [String],
        default: []
    },
    publishedDate: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('BlogPost', blogPostSchema);
