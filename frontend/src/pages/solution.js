// Step 1: Import React
import * as React from "react";
import MainLayout from "../components/MainLayout";
import BlogContent from "../components/BlogContent";
import { Layout } from "antd";
import { Col, Row } from "antd";

const { Content } = Layout;

const SolutionPage = () => {
  return (
    <MainLayout pageTitle="Home">
      <Content
        style={{
          // padding: "120px",
          paddingTop: "0px",
          paddingBottom: "3px",
          borderBottom: "0.2px solid rgba(111,111,110,.8)",
        }}
      >
        <Row>
          <Col xs={{span: 18, offset: 3}} lg={{span: 14, offset: 5}}>
            <BlogContent></BlogContent>
          </Col>
        </Row>
      </Content>
    </MainLayout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Solution</title>;

// Step 3: Export your component
export default SolutionPage;
