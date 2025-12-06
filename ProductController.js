
// const { useId } = require("react");
const { addVegItemService, addNonvegItemService,
      addMilkItemService, addMultipleVegItemsService, 
      addMultipleNonvegItemsService,
      addMultipleMilkItemsService,
      getVegItemsService, getNonvegItemsService,
      getMilkItemsService, 
      registerUserService, loginUserService, 
      fetchAllOrders} = require("./ProductService");


const jwt = require("jsonwebtoken");



const addVegItem = async (req, res) => {
  try {
    const result = await addVegItemService(req.body);
    res.status(201).send({
      message: "Veg item added successfully",
      item: result,
    });
  } catch (err) {
    res.status(500).send({
      message: "Failed to add veg item",
      error: err.message,
    });
  }
};

const addNonvegItem = async (req, res) => {
  try {
    const result = await addNonvegItemService(req.body);
    res.status(201).send({
      message: "Non-veg item added successfully",
      item: result,
    });
  } catch (err) {
    res.status(500).send({
      message: "Failed to add non-veg item",
      error: err.message,
    });
  }
};

const addMilkItem = async (req, res) => {
  try {
    const result = await addMilkItemService(req.body);
    res.status(201).send({
      message: "Milk item added successfully",
      item: result,
    });
  } catch (err) {
    res.status(500).send({
      message: "Failed to add milk item",
      error: err.message,
    });
  }
};

const addMultipleVegItems = async (req, res) => {
  try {
    const result = await addMultipleVegItemsService(req.body);
    res.status(201).send({
      message: "Multiple veg items added successfully",
      items: result,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error adding multiple veg items",
      error: error.message,
    });
  }
};

const addMultipleNonvegItems = async (req, res) => {
  try {
    const result = await addMultipleNonvegItemsService(req.body);
    res.status(201).send({
      message: "Multiple non-veg items added successfully",
      items: result,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error adding multiple non-veg items",
      error: error.message,
    });
  }
};

const addMultipleMilkItems = async (req, res) => {
  try {
    const result = await addMultipleMilkItemsService(req.body);
    res.status(201).send({
      message: "Multiple milk items added successfully",
      items: result,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error adding multiple milk items", error: error.message, });
  }
};

const getVegItems = async (req, res) => {
  try {
    const items = await getVegItemsService();
    res.send({items});
  } catch (error) {
    res.status(500).send({
      message: "Failed to fetch veg items",error: error.message, });
  }
};

const getNonvegItems = async (req, res) => {
  try {
    const items = await getNonvegItemsService();
    res.send({ items });
  } catch (error) {
    res.status(500).send({
      message: "Failed to fetch non-veg items",error: error.message,});
  }
};

const getMilkItems = async (req, res) => {
  try {
    const items = await getMilkItemsService();
    res.send({ items });
  } catch (error) {
    res.status(500).send({
      message: "Failed to fetch milk items",
      error: error.message,
    });
  }
};
const getAllOrders = async (req, res) => {
  try {
const orders = await fetchAllOrders();

    return res.status(200).json({
      message: "Orders Fetched Successfully",
      data: orders,
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return res.status(500).json({
      message: "Failed to fetch orders",
      error: error.message,
    });
  }
};


const registerUser = async (req, res) => {
  try {
    const result = await registerUserService(req.body);
    res.status(201).send({ message: "User Registered Successfully", user: result });
  } catch (err) {
    res.status(500).send(err);
  }
};

const loginUser = async (req, res) => {
  try {
    const result = await loginUserService(req.body); // result = { user, token }
    if (!result) {
      return res.status(400).send({ message: "Invalid Email or Password" });
    }

    res.status(200).send({
      message: "Login Successful",
      token: result.token,
      user: result.user,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};


module.exports = {
  addVegItem,
  addNonvegItem,
  addMilkItem,
  addMultipleVegItems,
  addMultipleNonvegItems,
  addMultipleMilkItems,
  getVegItems,
  getNonvegItems,
  getMilkItems,
  getAllOrders,
  registerUser,loginUser ,
};
