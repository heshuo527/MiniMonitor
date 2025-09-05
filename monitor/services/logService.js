const fs = require("fs").promises;
const path = require("path");

const logPath = path.join(process.cwd(), "logs/monitor.log");

async function readLogs() {
  const data = await fs.readFile(logPath, "utf-8");
  return data
    .split("\n")
    .filter(Boolean)
    .map(line => {
      try {
        return JSON.parse(line);
      } catch {
        return { raw: line };
      }
    });
}

async function writeLog(data) {
  await fs.appendFile(logPath, JSON.stringify(data) + "\n");
}

module.exports = { readLogs, writeLog };
