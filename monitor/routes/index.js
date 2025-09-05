const express = require("express");
const monitorRouter = require("./monitor");

const router = express.Router();

router.use("/", monitorRouter);

module.exports = router;
