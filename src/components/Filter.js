import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Filter(props) {
  const searchItems = async (e) => {
    var filterValue = e.target.value;

    await fetch(`http://localhost:3001/jobs?role_like=${filterValue}`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (jobJson) {
        console.log(jobJson);
        props.setJobs(jobJson);
      });
  };

  return (
    <Row className="justify-content-center">
      <Col xs="10" lg="10" className="bg-warning">
        <input
          type="search"
          className="form-control"
          placeholder="Search..."
          onChange={searchItems}
        />
      </Col>
    </Row>
  );
}

export default Filter;
