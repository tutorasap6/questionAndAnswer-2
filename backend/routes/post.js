const {
  addPost,
  getPosts,
  post_delete,
  getPost,
  post_update,
  file_upload,
  fetch_answered_posts,
  upload,
} = require("../controllers/postController");
const multer = require("multer");
const path = require("path");

const fileRenamer = (filename) => {
  const queHoraEs = Date.now();
  const regex = /[\s_-]/gi;
  const fileTemp = filename.replace(regex, ".");
  let arrTemp = [fileTemp.split(".")];
  return `${arrTemp[0]
    .slice(0, arrTemp[0].length - 1)
    .join("_")}${queHoraEs}.${arrTemp[0].pop()}`;
};

const storage1 = multer.diskStorage({
  destination: path.join(__dirname, "../uploads"),
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, fileRenamer(file.originalname));
  },
});

const storage2 = multer.diskStorage({
  destination: path.join(__dirname, "../postFile"),
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, fileRenamer(file.originalname));
  },
});

const upload1 = multer({ storage1 });
const upload2 = multer({ storage2 });

const router = require("express").Router();

router.get("/pull", getPosts);
router.get("/:id", getPost);
router.get("/fetch/answeredPosts", fetch_answered_posts);
router.post("/", addPost);
router.post("/upload/:id", upload1.single("file"), file_upload);
router.post("/file/:id", upload2.single("file"), upload);
router.patch("/:id", post_update);
router.delete("/:id", post_delete);

module.exports = router;
