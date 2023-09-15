const Post = require("../models/postModel");
const validator = require("validator");

module.exports.addPost = async (req, res, next) => {
  try {
    console.log(req.body);
    const errors = "";
    const {
      questionTitle,
      courseCode,
      universityName,
      category,
      courseName,
      insertPrice,
      insertTagsHere,
      description,
    } = req.body;
    if (validator.isEmpty(questionTitle)) {
      return res.json({
        errors: "title is required.",
        status: false,
      });
    }
    if (validator.isEmpty(courseCode)) {
      return res.json({
        errors: "coursecode is required.",
        status: false,
      });
    }
    if (validator.isEmpty(universityName)) {
      return res.json({
        errors: "university is required.",
        status: false,
      });
    }
    if (validator.isEmpty(category)) {
      return res.json({
        errors: "category is required.",
        status: false,
      });
    }
    if (validator.isEmpty(courseName)) {
      return res.json({
        errors: "coursename is required.",
        status: false,
      });
    }
    if (validator.isEmpty(insertPrice)) {
      return res.json({
        errors: "price is required.",
        status: false,
      });
    }
    if (validator.isEmpty(insertTagsHere)) {
      return res.json({
        errors: "Tags is required.",
        status: false,
      });
    }
    if (validator.isEmpty(description)) {
      return res.json({
        errors: "description is required.",
        status: false,
      });
    }

    console.log(errors, req.body);
    const post = await Post.create({
      questionTitle,
      courseCode,
      universityName,
      category,
      courseName,
      insertPrice,
      insertTagsHere,
      description,
    });
    return res.json({ status: true, post });
  } catch (ex) {
    next(ex);
  }
};

module.exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({});
    return res.json(posts);
  } catch (ex) {
    next(ex);
  }
};
