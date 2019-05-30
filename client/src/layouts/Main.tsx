import { Breadcrumb, Col, Icon, Layout, Row } from "antd";
import React, { Component } from "react";
import { Link, Route, RouteProps } from "react-router-dom";
import AppContext from "../AppContext";
import logo from "../assets/logo/logo_small.png";
import "../assets/styles/app.scss";
import AccountInfo from "../components/layoutComponents/AccountInfo";
import SearchBar from "../components/layoutComponents/SearchBar";
import Sidebar from "../components/layoutComponents/Sidebar";

const { Header, Content, Footer } = Layout;

interface ILayoutProps extends RouteProps {
	title: string;
}

class Main extends Component<ILayoutProps> {
	public static contextType = AppContext;
	public render() {
		return (
			<>
				<Layout style={{ minHeight: "100vh" }}>
					{this.context.sidebar && <Sidebar {...this.props} />}
					<Layout>
						<Header style={{ background: "#fff", padding: 0 }}>
							<Row type="flex" justify="space-between">
								<Col xs={4} sm={3} md={2} lg={2} xl={2} xxl={1}>
									<div className="logo">
										<Link to="/">
											<img alt="Ctor" src={logo} />
										</Link>
									</div>
								</Col>
								<Col xs={14} sm={15} md={11} lg={11} xl={12} xxl={17} style={{ textAlign: "left" }}>
									<SearchBar />
								</Col>
								<Col xs={6} sm={6} md={11} lg={10} xl={10} xxl={6} style={{ textAlign: "right", padding: "0 24px 0 0" }}>
									<AccountInfo />
								</Col>
							</Row>
						</Header>
						<Content style={{ margin: "0 16px" }}>
							{this.context.sidebar && (
								<Breadcrumb style={{ margin: "16px 0" }}>
									<Breadcrumb.Item>{this.props.title}</Breadcrumb.Item>
								</Breadcrumb>
							)}
							{!this.context.sidebar && <br />}
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
