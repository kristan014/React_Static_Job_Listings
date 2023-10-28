import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import api from "../api/api";

function Filter(props) {



  const [isFiltered, setIsFiltered] = useState(false);
  const [urlParams, setUrlParams] = useState('');

  const [roleParams, setRoleParams] = useState([]);
  const [levelParams, setLevelParams] = useState([]);
  const [languageParams, setLanguageParams] = useState([]);
  const [toolParams, setToolParams] = useState([]);


  isFiltered ? api.getData(props.setJobs) : api.getData(props.setJobs)



  const searchItems = async (e) => {
    // console.log(e.target.selectedOptions)
    // let filterValue;

    setRoleParams([])
    setLevelParams([])
    setLanguageParams([])
    setToolParams([])



    Array.from(e.target.selectedOptions, option => {
      let attr = option.getAttribute('attr')

      let string = ''

      switch (attr) {
        case 'role':
          setRoleParams(roleParams => [...roleParams, option.value])
          setIsFiltered(true)
          break;

        case 'level':
          setLevelParams(levelParams => [...levelParams, option.value])
          setIsFiltered(true)
          break;

        case 'language':
          setLanguageParams(languageParams => [...languageParams, option.value])
          setIsFiltered(true)
          break;

        case 'tool':
          setToolParams(toolParams => [...toolParams, option.value])
          setIsFiltered(true)
          break;
          
          default:
          setIsFiltered(false)
          break;
      }

          
    });

    Array.from(roleParams, role =>{
      console.log(role)
    })

    

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
