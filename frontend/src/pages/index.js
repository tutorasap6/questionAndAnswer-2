// Step 1: Import React
import * as React from "react";
import MainLayout from "../components/MainLayout";
import BlogContent from "../components/BlogContent";
import { Layout } from "antd";
import { Col, Row } from "antd";

const { Content } = Layout;

const IndexPage = () => {
  return (
    <MainLayout pageTitle="Home">
      <Content
        style={{
          padding: "120px",
          paddingTop: "0px",
          paddingBottom: "3px",
        }}
      >
        <Row>
          <Col span={16} offset={4}>
            <BlogContent></BlogContent>
          </Col>
        </Row>
      </Content>
    </MainLayout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home</title>;

// Step 3: Export your component
export default IndexPage;
