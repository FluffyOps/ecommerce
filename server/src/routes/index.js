const { Router } = require("express");
const users = require("./users");
const products = require("./products");

const router = Router();

router.use("/api/users", users);
router.use("/api/products", products);

module.exports = router;
