import * as React from "react";
// import backimg from "../assets/images/register.png";
import backimg from "../assets/images/back.jpg";
import { useEffect, useState } from "react";
import { Dropdown, Layout, Menu } from "antd";
import { Col, Row } from "antd";
import logocom from "../assets/images/logocom.png";
import { Link } from "gatsby";
import { ToastContainer } from "react-toastify";
import { CaretDownOutlined, SmileOutlined } from '@ant-design/icons';
import "react-toastify/dist/ReactToastify.css";

const { Header, Footer } = Layout;

const { Content } = Layout;

const IndexPage = () => {
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (localStorage.token) setAuthorized(true);
  }, []);

  // const navbarArray = ["Home", "AboutUs", "How To Work"]
  const unauthorizedArray = [
    { name: "Home", url: "/" },
    { name: "Solutions", url: "/solution" },
    { name: "About Us", url: "/about" },
    { name: "How it works", url: "/how" },
    { name: "Services", url: "/service" },
    { name: "Pricing", url: "/pricing" },
    { name: "Terms and Conditions", url: "/terms" },
    { name: "Login", url: "/auth/login" },
  ];

  const authorizedArray = [
    { name: "Home", url: "/" },
    { name: "Solutions", url: "/solution" },
    { name: "Post Questions", url: "/post" },
    { name: "About Us", url: "/about" },
    { name: "How it works", url: "/how" },
    { name: "Services", url: "/service" },
    { name: "Pricing", url: "/pricing" },
    { name: "Terms and Conditions", url: "/terms" },
    { name: "Logout", url: "/logout" },
  ];
  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];

  return (
    <>

    <Layout
      className="layout"
      style={{
        margin: "-8px",
        backgroundImage: `url( ${backimg})`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
      }}
    >
      <header
        style={{
          padding: "0",
          height: "90px",
          //   background: "#272930",
        }}
      >
        <Row>
          <Col

            lg={{ span: 3 }}
            
            style={{
              display: "flex",
              paddingTop: "15px",
            }}
          >
            <a href="/" style={{ margin: '0 auto' }}>
              <img src={logocom} alt="logo" height="40%" />
            </a>
          </Col>
          <Col md={{ span: 0 }} xl={{ span: 20 }} style={{ paddingTop: "30px" }}>
            {authorized ? (
              <Menu
                theme="white"
                mode="horizontal"
                style={{ minWidth: 0, flex: "auto", justifyContent: "flex-end" }}
                md={{ gap: '3px' }}
                items={authorizedArray.map((item, index) => {
                  const key = index + 1;
                  return {
                    key,
                    label: (
                      <Link to={item.url}>
                        <span
                          style={{
                            fontFamily: "awesome",
                            color: "white",
                            fontSize: "16px",
                          }}
                        >
                          {item.name}
                        </span>
                      </Link>
                    ),
                  };
                })}
              />
            ) : (
              <Menu
                theme="white"
                mode="horizontal"
                style={{ minWidth: 0, flex: "auto", justifyContent: "space-evenly" }}
                items={unauthorizedArray.map((item, index) => {
                  const key = index + 1;
                  return {
                    key,
                    label: (
                      <Link to={item.url}>
                        <span
                          style={{
                            marginLeft: "5px",
                            fontFamily: "awesome",
                            color: "white",
                            fontSize: "16px",
                          }}
                        >
                          {item.name}
                        </span>
                      </Link>
                    ),
                  };
                })}
              />
            )}
          </Col>
          <Col md={{ span: 3, offset: 10 }} lg={{offset: 17}} xl={{ span: 0 }} style={{ paddingTop: "30px" }}>
            {authorized ? (
              <Dropdown
                trigger={['click']}
                menu={{items: authorizedArray.map((item, index) => ({
                  key: index + 1, label: <Link to={item.url}>
                    <span
                      style={{
                        fontFamily: "awesome",
                        color: "black",
                        fontSize: "16px",
                      }}
                    >
                      {item.name}
                    </span>
                  </Link>
                }))}}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <CaretDownOutlined />
                </a>
              </Dropdown>
            ) : (
              <Dropdown
                trigger={['click']}
                menu={{items: unauthorizedArray.map((item, index) => {
                  const key = index + 1;
                  return {
                    key,
                    label: (
                      <Link to={item.url}>
                        <span
                          style={{
                            marginLeft: "5px",
                            fontFamily: "awesome",
                            color: "black",
                            fontSize: "16px",
                          }}
                        >
                          {item.name}
                        </span>
                      </Link>
                    ),
                  };
                })}}
              ><a onClick={(e) => e.preventDefault()}>
                  <CaretDownOutlined />
                </a></Dropdown>
            )}
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
      <Content>
        <Row>
          <Col span={8}></Col>

          <Col span={12}>
            {/* <div>
              <h3
                style={{
                  fontSize: "60px",
                  //   color: "white",
                  color: "black",
                  fontFamily: "awesome",
                }}
              >
                What we are
              </h3>
              <p
                style={{
                  fontSize: "35px",
                  //   color: "white",
                  color: "black",
                  fontFamily: "awesome",
                }}
              >
                Online education has become an essential component of our
                academic path in the fast-paced world of today. However, it
                frequently presents its own special difficulties. Students
                frequently have overwhelming workloads due to managing many
                online courses and keeping up with assignments, exams, lab
                reports, and essays. This is where ChamplainSolutions.com comes
                in to help you have a more effective and seamless experience
                when learning online.
              </p>
            </div> */}
            <div>
              <h3
                style={{
                  fontSize: "45px",
                  color: "white",
                  //color: "black",
                  fontFamily: "awesome",
                }}
              >
                Why Champlain Solutions?
              </h3>
              <p
                style={{
                  fontSize: "28px",
                  color: "white",
                  //color: "black",
                  fontFamily: "awesome",
                }}
              >
                We at ChamplainSolutions.com are aware of the difficulties that
                students have when pursuing an education online.
                <br />
                Our goal is to give students like you thorough support so you
                can succeed in your online courses with assurance.
              </p>
            </div>
            {/* <div>
              <h3
                style={{
                  fontSize: "40px",
                  color: "white",
                  fontFamily: "awesome",
                }}
              >
                Services We Provide
              </h3>
              <p
                style={{
                  fontSize: "25px",
                  color: "white",
                  fontFamily: "awesome",
                }}
              >
                Our platform provides a wide range of services created to meet
                all of your demands for online courses: Assist with assignments:
                With the assistance of our staff of knowledgeable writers and
                subject-matter experts, you can complete challenging tasks and
                provide high-caliber work on schedule. 2. Support for tests and
                quizzes: Utilize our study guides and quiz preparation materials
                to confidently prepare for tests and quizzes. 3. Laboratory
                Reports A tough chore is writing a lab report. We help you
                perform experiments, analyze data, and successfully convey your
                findings. 4. Writing an Essay: Our qualified writers can assist
                you in creating well-structured, thoroughly researched essays
                for any sort of academic writing, including research papers,
                argumentative essays, and more. 5. assignments Assistance: We
                provide assistance with a range of assignments, including group
                projects, talks, and more. 6. Assistance with dissertations and
                theses: Our experts can help you through the process of creating
                and finishing your dissertation or thesis if you're pursuing
                higher degrees.
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "40px",
                  color: "white",
                  fontFamily: "awesome",
                }}
              >
                Why should you select ChamplainSolutions.com?
              </h3>
              <p
                style={{
                  fontSize: "25px",
                  color: "white",
                  fontFamily: "awesome",
                }}
              >
                First, the Experienced Team: Our staff is made up of skilled
                authors, researchers, and subject-matter specialists that are
                committed to seeing that you succeed. Personalized Solutions: We
                are aware that each student has different needs. We offer
                specialized solutions to meet your unique needs because of this.
                3. Strict Quality Assurance: We uphold the strictest
                requirements for quality and make sure that every assignment is
                carefully evaluated before delivery. 4. On-Time Delivery: Our
                staff works carefully to deliver your work on time, every time
                since we recognize how important deadlines are. 5. Competitive
                Pricing: We provide affordable pricing options to make sure that
                students with different budgets can use our services.
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "40px",
                  color: "white",
                  fontFamily: "awesome",
                }}
              >
                How It Operates
              </h3>
              <p
                style={{
                  fontSize: "25px",
                  color: "white",
                  fontFamily: "awesome",
                }}
              >
                It's simple to use ChamplainSolutions.com: 1. Submit Your
                Request First, use our user-friendly website to submit the
                specifics of your work or assignment. Obtain a Quote: 2. For the
                service you need, you'll get a quote. Our pricing is clear and
                reasonable. 3. Make a Payment: Once you are happy with the
                quote, use our platform to make a safe payment. 4. Our team Upon
                receiving your work, Our team will get to work on your
                assignment and make sure it complies with all of your
                specifications. The finished product will be delivered to you on
                time or earlier. 5. Review and comments: We want you to assess
                the work and offer comments. If changes are required, we're
                always available. At ChamplainSolutions.com, we are dedicated to
                assisting you in achieving your objectives in the field of
                online education and supporting your academic endeavors. Bid
                adieu to anxiety and late-night studying sessions. You can
                concentrate on comprehending your coursework with our
                professional help while we take care of the rest. With the help
                of ChamplainSolutions.com, get started on the path to academic
                success now. We're here to help you find online learning more
                convenient, manageable, and fun.
              </p>
            </div> */}
          </Col>
          <Col span={4}></Col>
        </Row>
      </Content>
      {/* <div
        style={{
          backgroundImage: `url( ${backimg})`,
          backgroundSize: "cover",
          height: "100vh",
          width: "100vw",
        }}
      ></div> */}
      {/* <footer>
        <div
          style={{
            // background: "rgb(26,28,33)",
            display: "flex",
            justifyContent: "center",
            height: "100px",
            // borderTop: "1px solid #212328",
            marginTop: "0.2px",
          }}
        >
          <h2
            style={{
              fontFamily: "awesome",
              //color: "#707885",
              color: "black",
              fontSize: "18px",
              margin: "30px",
              marginLeft: "0px",
              textAlign: "center",
            }}
          >
            ©2023 Champlain Solutions
          </h2>
        </div>
      </footer> */}
      
    </Layout>
    <Footer
    style={{
      // textAlign: "center",
      padding: "0px",
      margin:"-8px",
      width:"100vw"
    }}
  >
    <Row
      style={{
        // background: "rgb(66,180,186)",
        background: "rgb(26,28,33)",
        display: "flex",
        justifyContent: "center",
        height: "315px",
        paddingTop: "40px",
      }}
    >
      <Col
        span={5}
        style={{
          paddingLeft: "175px",
          paddingTop: "100px",
        }}
      >
        <img src={logocom} alt="logo" width="45%" height="40%" />
      </Col>
      <Col span={5} style={{ paddingLeft: "0px", paddingTop: "65px" }}>
        <p
          style={{
            fontSize: "15px",
            fontFamily: "awesome",
            color: "#707885",
          }}
        >
          Online education has become an essential component of our academic
          path in the fast-paced world of today. However, it frequently
          presents its own special difficulties. Students frequently have
          overwhelming workloads due to managing many online courses and
          keeping up with assignments, exams, lab reports, and essays. This
          is where ChamplainSolutions.com comes in to help you have a more
          effective and seamless experience when learning online.
        </p>
      </Col>
      <Col span={3} style={{ paddingLeft: "40px" }}>
        <h4
          style={{
            fontFamily: "awesome",
            color: "white",
            fontSize: "18px",
            paddingLeft: "40px",
          }}
        >
          About us
        </h4>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <a
              href="/"
              style={{
                fontFamily: "awesome",
                color: "#707885",
              }}
            >
              How it works
            </a>
          </li>
          <li>
            <a
              href="/about"
              style={{ fontFamily: "awesome", color: "#707885" }}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/service"
              style={{ fontFamily: "awesome", color: "#707885" }}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/terms"
              style={{ fontFamily: "awesome", color: "#707885" }}
            >
              Terms & Conditions
            </a>
          </li>
        </ul>
      </Col>
      <Col span={3} style={{ paddingLeft: "40px" }}>
        <h4
          style={{
            fontFamily: "awesome",
            color: "white",
            fontSize: "18px",
            paddingLeft: "30px",
          }}
        >
          Legal Stuff
        </h4>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <a href="#" style={{ fontFamily: "awesome", color: "#707885" }}>
              Team of Use
            </a>
          </li>
          <li>
            <a href="#" style={{ fontFamily: "awesome", color: "#707885" }}>
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/pricing"
              style={{ fontFamily: "awesome", color: "#707885" }}
            >
              Pricing
            </a>
          </li>
        </ul>
      </Col>
      <Col span={3} style={{ paddingLeft: "40px" }}>
        <h4
          style={{
            fontFamily: "awesome",
            color: "white",
            fontSize: "18px",
            paddingLeft: "50px",
          }}
        >
          Help
        </h4>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <a href="#" style={{ fontFamily: "awesome", color: "#707885" }}>
              knowledge Base
            </a>
          </li>
          <li>
            <a href="#" style={{ fontFamily: "awesome", color: "#707885" }}>
              Support
            </a>
          </li>
          <li>
            <a href="#" style={{ fontFamily: "awesome", color: "#707885" }}>
              Advanced Payment
            </a>
          </li>
        </ul>
      </Col>
      <Col span={5} style={{ paddingLeft: "0px" }}></Col>
    </Row>
    <div
      style={{
        background: "rgb(26,28,33)",
        display: "flex",
        justifyContent: "center",
        height: "100px",
        borderTop: "1px solid #212328",
        marginTop: "0.2px",
      }}
    >
      <h2
        style={{
          fontFamily: "awesome",
          color: "#707885",
          fontSize: "18px",
          margin: "30px",
          marginLeft: "0px",
          textAlign: "center",
        }}
      >
        ©2023 Champlain Solutions
      </h2>
    </div>
  </Footer>
  </>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home</title>;

// Step 3: Export your component
export default IndexPage;
