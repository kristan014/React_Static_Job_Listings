import React from "react";
import "../App.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';





const Lists = () => {
  return (
    <div>
      {/* <div className="card-container">
        <div className="card">
          <div className="title">
            <div>
              <span>Photoshop</span>
              <span>New</span>
              <span>Featured</span>
            </div>
            <h2>Senior Frontend Developer</h2>
            <div>
              <span>1d ago</span>
              <span>Full Time</span>
              <span>USA Only</span>
            </div>
          </div>
          <div className="skills">
              <span>Frontend</span>
              <span>Senior</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Javascript</span>
          </div>
        </div>

      </div> */}

      <Container>
        <Stack gap={4}>
          <Row className="justify-content-center">
            <Col xs="10" lg="10" className="bg-warning">
              <div className="card-container">
                <Row className="align-items-center">

                  <Col className="mt-3" lg="6">
                    <div>
                      <span className="me-4">Photoshop</span>
                      <span className="me-2">New</span>
                      <span className="me-2">Featured</span>
                    </div>
                    <h6 className="my-1" >Senior Frontend Developer</h6>
                    <div>
                      <span className="me-2">1d ago</span>
                      <span className="me-2">&#8226;</span>
                      <span className="me-2">Full Time</span>
                      <span className="me-2">&#8226;</span>
                      <span className="me-2">USA Only</span>
                    </div>
                  </Col>

                  <Col className="mt-3" lg="6">

                    <span className="d-inline-block me-3">Frontend</span>
                    <span className="d-inline-block me-3">Senior</span>
                    <span className="d-inline-block me-3">HTML</span>
                    <span className="d-inline-block me-3">CSS</span>
                    <span className="d-inline-block">Javascript</span>
                  </Col>

                </Row>

              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col xs="10" lg="10" className="bg-warning">
              <div className="card-container">
                <Row className="align-items-center">
                  <Col className="mt-3" lg="6">
                    <div>
                      <span className="me-4">Photoshop</span>
                      <span className="me-2">New</span>
                      <span className="me-2">Featured</span>
                    </div>
                    <h6 className="my-1" >Senior Frontend Developer</h6>
                    <div>
                      <span className="me-2">1d ago</span>
                      <span className="me-2">&#8226;</span>
                      <span className="me-2">Full Time</span>
                      <span className="me-2">&#8226;</span>
                      <span className="me-2">USA Only</span>
                    </div>
                  </Col>
                  <Col className="mt-3" lg="6">

                    <span className="d-inline-block me-3">Frontend</span>
                    <span className="d-inline-block me-3">Senior</span>
                    <span className="d-inline-block me-3">HTML</span>
                    <span className="d-inline-block me-3">CSS</span>
                    <span className="d-inline-block">Javascript</span>
                  </Col>
                </Row>

              </div>
            </Col>
          </Row>
        </Stack>
      </Container>


    </div >
  );
};

export default Lists;
