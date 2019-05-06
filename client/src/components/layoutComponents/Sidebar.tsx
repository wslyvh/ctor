import { Icon, Layout, Menu } from "antd";
import React, { Component } from "react";
import { RouteProps } from "react-router";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo_small.png";

const { Sider } = Layout;

class Sidebar extends Component<RouteProps> {
	public state = {
		collapsed: true
	};

	public onCollapse = (collapsed: boolean) => {
		this.setState({ collapsed });
	};

	public render() {
		const { location } = this.props;

		const pathname = location && location.pathname ? location.pathname : "/";
		const selected = "/" + pathname.split("/")[1];

		return (
			<>
				<Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
					<div className="logo center">
						<Link to="/">
							<img alt="Ctor" src={logo} height="28" />
						</Link>
					</div>

					<Menu theme="dark" selectedKeys={[selected]} mode="inline">
						<Menu.Item key="/">
							<Link to="/">
								<Icon type="dashboard" />
								<span>Dashboard</span>
							</Link>
						</Menu.Item>

						<Menu.Item key="/contracts">
							<Link to="/contracts">
								<Icon type="database" />
								<span>Contracts</span>
							</Link>
						</Menu.Item>
					</Menu>
				</Sider>
			</>
		);
	}
}

export default Sidebar;
