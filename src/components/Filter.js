import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import api from "../api/api";

function Filter(props) {

  const [isFiltered, setIsFiltered] = useState(false);
  const [urlParams, setUrlParams] = useState({
    role:[],
    level:[],
    language:[],
    tool:[],
  });
 

  isFiltered && api.getData(props.setJobs)



  const searchItems = async (e) => {
    console.log(e.target.selectedOptions)
    // let filterValue;
    Array.from(e.target.selectedOptions, option => {

      console.log(option.getAttribute('attr'))
      console.log(option.value)

      
    });

    // optionValues.map((option) => { 
    //   // filterValue += `&role_like=${filterValue}`
    //   console.log(option)
    // })

    // console.log(`&role_like=${filterValue}`)

    // await fetch(`http://localhost:3001/jobs?role_like=${filterValue}`, {
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //     Accept: "application/json",
    //   },
    // })
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (jobJson) {
    //     console.log(jobJson);
    //     props.setJobs(jobJson);
    //   });
  };

  return (
    <Row className="justify-content-center">
      <Col xs="10" lg="10" className="bg-warning">
        {/* <input
          type="search"
          className="form-control"
          placeholder="Search..."
          onChange={searchItems}
        /> */}
        <select  
          className="form-select"
          placeholder="Search..."
          onChange={searchItems} multiple>
            
            <option attr="role" value="FrontEnd">FrontEnd</option>
            <option attr="role" value="Fullstack">Fullstack</option>
            <option attr="level" value="Senior">Senior</option>

            <option attr="language" value="Javascript">Javascript</option>
            <option attr="language" value="HTML">HTML</option>
            <option attr="tool" value="React">React</option>




        </select>
      </Col>
    </Row>
  );
}

export default Filter;
