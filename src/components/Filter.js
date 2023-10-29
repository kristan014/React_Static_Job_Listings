import React, { useState,useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import api from "../api/api";

function Filter(props) {

  const [isFiltered, setIsFiltered] = useState(false);
  const [urlParams, setUrlParams] = useState('');

  useEffect(() => {
    api.getData(props.setJobs)
}, [])
  // isFiltered ? api.getData(props.setJobs,urlParams) : api.getData(props.setJobs)


  const searchItems = (e) => {

    let string = ''
    Array.from(e.target.selectedOptions, option => {
      let attr = option.getAttribute('attr')


      switch (attr) {
        case 'role':
          string += `&role=${option.value}` 
          setIsFiltered(true)
          break;

        case 'level':
          string += `&level=${option.value}`
          setIsFiltered(true)
          break;

        case 'languages':
          string += `&languages=${option.value}`
          setIsFiltered(true)
          break;

        case 'tools':
          string += `&tools=${option.value}`
          setIsFiltered(true)
          break;
          
          default:
          setIsFiltered(false)
          break;
      }


    });
    setUrlParams(string)

    api.getData(props.setJobs,urlParams) 
  };

  return (
    <Row className="justify-content-center">
      <Col xs="10" lg="10" className="bg-warning">

        <select
          className="form-select"
          placeholder="Search..."
          onChange={searchItems} multiple>

          <option attr="role" value="FrontEnd">FrontEnd</option>
          <option attr="role" value="Fullstack">Fullstack</option>
          <option attr="level" value="Senior">Senior</option>

          <option attr="languages" value="JavaScript">Javascript</option>
          <option attr="languages" value="HTML">HTML</option>
          <option attr="tools" value="React">React</option>

        </select>
      </Col>
    </Row>
  );
}

export default Filter;
