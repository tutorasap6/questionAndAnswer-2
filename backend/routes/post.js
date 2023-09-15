const { addPost, getPosts } = require("../controllers/postController");

const router = require("express").Router();

router.post("/", addPost);
router.get("/pull", getPosts);

module.exports = router;
