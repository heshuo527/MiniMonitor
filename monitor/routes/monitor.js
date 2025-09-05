const express = require("express");
const { getLogs, addLog } = require("../controllers/monitorController");

const router = express.Router();

// 获取日志
router.get("/logs", getLogs);

// 新增日志
router.post("/monitor", addLog);

module.exports = router;
