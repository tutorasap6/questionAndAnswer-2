const {
  addPost,
  getPosts,
  post_delete,
  getPost,
} = require("../controllers/postController");

const router = require("express").Router();

router.post("/", addPost);
router.get("/pull", getPosts);
router.get("/:id", getPost);
router.delete("/:id", post_delete);

module.exports = router;
