import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Filter from "./Filter";





const Lists = () => {

  const [jobs, setJobs] = useState([]);

  const getData = () => {

    fetch('http://localhost:3030/jobs?_limit=5'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (jobJson) {
        // console.log(jobJson);
        setJobs(jobJson)
      });
  }

  getData()

  return (
    <div>
     
      <Container>
        <Stack gap={4}>

        <Filter />

          {jobs.map((job, index) => (

            <Row className="justify-content-center" key={index} 
                  data-role={job.role} data-level={job.level} 
                      data-languages={job.languages} data-tools={job.tools}>
              <Col xs="10" lg="10" className="bg-warning">
                <div className="card-container">
                  <Row className="align-items-center">

                    <Col className="mt-3" lg="6">
                      <div>
                        <span className="me-4">{job.company}</span>
                        <span className="me-2">{job.new}</span>
                        <span className="me-2">{job.featured}</span>
                      </div>
                      <h6 className="my-1" >{job.position}</h6>
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
                        return <span className="d-inline-block me-3" key={index}>{language}</span>
                      })}

                       {job.tools.map((tool, index) => {
                        return <span className="d-inline-block me-3" key={index}>{tool}</span>
                      })}
                    </Col>

                  </Row>

                </div>
              </Col>
            </Row>
          ))}

        </Stack>
      </Container>


    </div >
  );
};

export default Lists;
