const logService = require("../services/logService");

async function getLogs(req, res) {
  try {
    const logs = await logService.readLogs();
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: "读取日志失败" });
  }
}

async function addLog(req, res) {
  try {
    const data = { ...req.body, ip: req.ip, time: new Date().toISOString() };
    await logService.writeLog(data);
    res.json({ status: "ok" });
  } catch (err) {
    res.status(500).json({ error: "写入日志失败" });
  }
}

module.exports = { getLogs, addLog };
