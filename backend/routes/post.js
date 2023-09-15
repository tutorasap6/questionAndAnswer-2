const {
  addPost,
  getPosts,
  post_delete,
  getPost,
  post_update,
} = require("../controllers/postController");

const router = require("express").Router();

router.get("/pull", getPosts);
router.get("/:id", getPost);
router.post("/", addPost);
router.patch("/:id", post_update);
router.delete("/:id", post_delete);

module.exports = router;
