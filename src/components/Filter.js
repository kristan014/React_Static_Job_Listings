import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Filter(props) {

  useEffect(() => {
    searchItems();
  }, [props.filters]);

  // remove a specific filter
  const removeFilter = (key,value) => {
    console.log(props.filters)

    props.filters.filter(function(filter,index) { 
      console.log(value)
      console.log(value !== filter[key])

      return value !== filter[key]
  })

  console.log(props.filters)
  }

  // build a string that will be used as parameter in api request
  const searchItems = (e) => {
    let string = "";

    // concat to string the value base on the data attribute of the selected option
    props.filters.map((filter, index) => {
      let key = Object.keys(filter)[0];
      return (key === 'languages' || key === 'tools') ? string += `&${key}_like=${filter[key]}` 
                                                      : string += `&${key}=${filter[key]}`;
    });

    // set the string params
    props.setUrlParams(string);

    // execute function updateState
    props.updateState();
  };

  return (
    <Row className="justify-content-center">
      <Col xs="10" lg="10" className="bg-warning">
        <div className="bg-warning">
          {props.filters.map((filter, index) => {
            let key = Object.keys(filter)[0];
            return <p key={index}>{filter[key]} <span onClick={() => { removeFilter(key,filter[key]) }}>X</span></p>
          })}
        </div>
     
      </Col>
    </Row>
  );
}

export default Filter;
