const express = require("express");


const {
  addVegItem,
  addNonvegItem,
  addMilkItem,
  addMultipleVegItems,
  addMultipleNonvegItems,
  addMultipleMilkItems,
  getVegItems,
  getNonvegItems,
  getMilkItems,
  registerUser,
  loginUser,
  getAllOrders
} = require("./ProductController");
const verifyToken = require("./Authmiddleware");




const router = express.Router();

router.post("/addVegItem", addVegItem);
router.post("/addNonvegItem", addNonvegItem);
router.post("/addMilkItem", addMilkItem);

router.post("/addMultipleVegItems", addMultipleVegItems);
router.post("/addMultipleNonvegItems", addMultipleNonvegItems);
router.post("/addMultipleMilkItems", addMultipleMilkItems);

router.get("/getVegItems", getVegItems);
router.get("/getNonvegItems", getNonvegItems);
router.get("/getMilkItems", getMilkItems);

 router.post("/orders", getAllOrders);
router.post("/register", registerUser);
router.post("/login", loginUser);

// router.post("/orders", verifyToken, getAllOrders);



module.exports = router;
