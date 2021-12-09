import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const GetStartedButton = {
  backgroundColor: "hsl(180, 66%, 49%)",
  color: "#FFF",
  borderRadius: "20px",
  border: "none",
  fontWeight: "bold",
  padding: "10px 40px 10px",
  marginTop: "20px",
};

const Layout = {
  padding: "5rem",
  //   maxWidth: "80%",
  //   margin: "0 auto",
};

const H1Text = {
  fontSize: "3.5rem",
  fontWeight: "800",
};

const H3Text = {
  fontSize: "1.2rem",
  fontWeight: "400",
  color: "hsl(257, 7%, 63%)",
  width: "80%",
};

function Introduction() {
  return (
    <div style={Layout}>
      <Container fluid>
        <Row>
          <Col xs={12} md={6}>
            <h1 style={H1Text}>More than just shorter links</h1>
            <h3 style={H3Text}>
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </h3>
            <button style={GetStartedButton}>Get Started</button>
          </Col>
          <Col xs={6} md={6}>
            <Image src={"/illustration-working.svg"} fluid alt="logo" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Introduction;
