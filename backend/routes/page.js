const {
    addPage,
    getPage,
    page_update,
    
  } = require("../controllers/pageController");
  
  const router = require("express").Router();
  
  
router.post("/", addPage);
router.get("/:id", getPage);
router.patch("/:id", page_update);

module.exports = router;
    