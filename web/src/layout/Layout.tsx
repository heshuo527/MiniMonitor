import { Layout, Menu, Typography } from "antd";
import { PieChartOutlined, DesktopOutlined } from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";
const { Title } = Typography;

const { Header, Content, Footer, Sider } = Layout;

export default function AppLayout() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <div style={{ height: 64, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 18 }}>
          <Title level={4} style={{ color: "white", margin: 0 }}>我的标题</Title>
        </div>
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to="/monitor-dashboard">监控日志</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0, textAlign: "center" }}>
          <h2>监控系统 Dashboard</h2>
        </Header>
        <Content style={{ margin: "16px" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <Outlet /> {/* 这里渲染子路由页面 */}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Mini Monitor ©2025 Created by You
        </Footer>
      </Layout>
    </Layout>
  );
}
