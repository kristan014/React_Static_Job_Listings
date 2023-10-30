import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Filter from "./Filter";
import Pagination from "./Pagination";
import api from "../api/api";

const Lists = () => {
  const [jobs, setJobs] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [rowsPerpage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [urlParams, setUrlParams] = useState("");

  const updateState = () => {
    api.countPages(setTotalPage,urlParams);
    api.getData(setJobs, urlParams, currentPage, rowsPerpage);
  };

  useEffect(() => {
    updateState();
  }, [totalPage, currentPage,urlParams]);

  return (
    <div>
      <Container>
        <Stack gap={4}>
          {/* call the filter component */}
          <Filter
            setJobs={setJobs}
            currentPage={currentPage}
            totalPage={totalPage}
            setUrlParams={setUrlParams}
            updateState={updateState}
          />

          {/* loop to display all the jobs */}
          {jobs.map((job, index) => (
            <Row
              className="justify-content-center"
              key={index}
              data-role={job.role}
              data-level={job.level}
              data-languages={job.languages}
              data-tools={job.tools}
            >
              <Col xs="10" lg="10" className="bg-warning">
                <div className="card-container">
                  <Row className="align-items-center">
                    <Col className="mt-3" lg="6">
                      <div>
                        <span className="me-4">{job.company}</span>
                        <span className="me-2">{job.new}</span>
                        <span className="me-2">{job.featured}</span>
                      </div>
                      <h6 className="my-1">{job.position}</h6>
                      <div>
                        <span className="me-2">{job.postedAt}</span>
                        <span className="me-2">&#8226;</span>
                        <span className="me-2">{job.contract}</span>
                        <span className="me-2">&#8226;</span>
                        <span className="me-2">{job.location}</span>
                      </div>
                    </Col>

                    <Col className="mt-3" lg="6">
                      <span className="d-inline-block me-3">{job.role}</span>
                      <span className="d-inline-block me-3">{job.level}</span>
                      {job.languages.map((language, index) => {
                        return (
                          <span className="d-inline-block me-3" key={index}>
                            {language}
                          </span>
                        );
                      })}

                      {job.tools.map((tool, index) => {
                        return (
                          <span className="d-inline-block me-3" key={index}>
                            {tool}
                          </span>
                        );
                      })}
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          ))}

          {/* call the pagination component */}
          <Pagination
            setTotalPage={setTotalPage}
            totalPage={totalPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            updateState={updateState}
          />
        </Stack>
      </Container>
    </div>
  );
};

export default Lists;
