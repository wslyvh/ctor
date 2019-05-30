import { Breadcrumb, Col, Icon, Layout, Row } from "antd";
import React, { Component } from "react";
import { Route, RouteProps } from "react-router-dom";
import AppContext from "../AppContext";
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
              <Row>
                <Col span={16} style={{ textAlign: "left", padding: "0 24px" }}>
                  <SearchBar />
                </Col>
                <Col span={8} style={{ textAlign: "right", padding: "0 24px" }}>
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
