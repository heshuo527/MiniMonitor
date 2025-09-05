import { useEffect, useState } from "react";
import { AppTable } from "../../components/AppTable";
import type { ColumnsType } from "antd/es/table";

type LogItem = {
  type: string;
  message?: string;
  metric?: string;
  value?: number;
  stack?: number;
  time: string;
  ip: string;
  key: string; // 用于 antd Table 的 key
};

export default function MonitorDashboard() {
  const [logs, setLogs] = useState<LogItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/logs")
      .then(res => res.json())
      .then((data: LogItem[]) => {
        // 给每条日志加上 key
        setLogs(data.map((item, index) => ({ ...item, key: index.toString() })));
      });
  }, []);

  const columns: ColumnsType<LogItem> = [
    { title: "时间", dataIndex: "time", key: "time" },
    { title: "类型", dataIndex: "type", key: "type" },
    {
      title: "消息 / 指标",
      key: "message",
      render: (_, record) => record.message || record.metric,
    },
    {
      title: "详情",
      key: "detail",
      render: (_, record) => record.stack ?? record.value ?? "-",
    },
    { title: "IP", dataIndex: "ip", key: "ip" },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1>监控日志 Dashboard</h1>
      <AppTable<LogItem> columns={columns} dataSource={logs} pageSize={10} />
    </div>
  );
}
