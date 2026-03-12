const BlogPost = require('../models/BlogPost');

// @desc    Fetch all blog posts (paginated)
// @route   GET /api/blogs
// @access  Public
const getBlogs = async (req, res) => {
    try {
        const pageSize = 12;
        const page = Number(req.query.pageNumber) || 1;

        const count = await BlogPost.countDocuments({});
        const blogs = await BlogPost.find({})
            .populate('category', 'categoryName')
            .limit(pageSize)
            .skip(pageSize * (page - 1))
            .sort({ publishedDate: -1 });

        res.json({ blogs, page, pages: Math.ceil(count / pageSize) });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Fetch single blog by ID or Slug
// @route   GET /api/blogs/:id
// @access  Public
const getBlogById = async (req, res) => {
    try {
        let blog;
        if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            blog = await BlogPost.findById(req.params.id).populate('category', 'categoryName');
        }

        if (!blog) {
            blog = await BlogPost.findOne({ slug: req.params.id }).populate('category', 'categoryName');
        }

        if (blog) {
            res.json(blog);
        } else {
            res.status(404).json({ message: 'Blog post not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a blog post
// @route   POST /api/blogs
// @access  Private/Admin
const createBlog = async (req, res) => {
    try {
        const blog = new BlogPost(req.body);
        const createdBlog = await blog.save();
        res.status(201).json(createdBlog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update a blog post
// @route   PUT /api/blogs/:id
// @access  Private/Admin
const updateBlog = async (req, res) => {
    try {
        const blog = await BlogPost.findById(req.params.id);

        if (blog) {
            Object.assign(blog, req.body);
            const updatedBlog = await blog.save();
            res.json(updatedBlog);
        } else {
            res.status(404).json({ message: 'Blog post not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete a blog post
// @route   DELETE /api/blogs/:id
// @access  Private/Admin
const deleteBlog = async (req, res) => {
    try {
        const blog = await BlogPost.findById(req.params.id);

        if (blog) {
            await blog.deleteOne();
            res.json({ message: 'Blog post removed' });
        } else {
            res.status(404).json({ message: 'Blog post not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog
};
