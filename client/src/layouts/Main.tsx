import { Breadcrumb, Icon, Layout } from "antd";
import React, { Component } from "react";
import { Route, RouteProps } from "react-router-dom";
import "../assets/styles/app.scss";
import AccountInfo from "../components/layoutComponents/AccountInfo";
import Sidebar from "../components/layoutComponents/Sidebar";

const { Header, Content, Footer } = Layout;

interface ILayoutProps extends RouteProps {
	title: string;
}

class Main extends Component<ILayoutProps> {
	public render() {
		return (
			<>
				<Layout style={{ minHeight: "100vh" }}>
					<Sidebar {...this.props} />

					<Layout>
						<Header style={{ background: "#fff", padding: 0, textAlign: "right" }}>
							<AccountInfo />
						</Header>
						<Content style={{ margin: "0 16px" }}>
							<Breadcrumb style={{ margin: "16px 0" }}>
								<Breadcrumb.Item>{this.props.title}</Breadcrumb.Item>
							</Breadcrumb>
							<div style={{ padding: 24, background: "#fff" }}>
								<Route {...this.props} />
							</div>
						</Content>
						<Footer style={{ textAlign: "center" }}>
							<small className="text-muted">
								<a href="https://github.com/wslyvh/ctor" target="_blank" rel="noopener noreferrer" className="text-reset">
									<Icon type="github" />
								</a>
								&nbsp;&nbsp;
								<a href="https://twitter.com/wslyvh" target="_blank" rel="noopener noreferrer" className="text-reset">
									<Icon type="twitter" />
								</a>
								&nbsp; @wslyvh
							</small>
						</Footer>
					</Layout>
				</Layout>
			</>
		);
	}
}

export default Main;
