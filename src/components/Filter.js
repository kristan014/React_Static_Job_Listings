import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Filter(props) {

  const searchItems = (e) => {
    let string = "";

    Array.from(e.target.selectedOptions, option => {
      let attr = option.getAttribute("attr");

      switch (attr) {
        case "role":
          return string += `&role=${option.value}`;

        case "level":
          return string += `&level=${option.value}`;

        case "languages":
          return  string += `&languages_like=${option.value}`;

        case "tools":
          return  string += `&tools_like=${option.value}`;

        default:
          return null
      }
    });
    props.setUrlParams(string);
    props.updateState();
  };

  return (
    <Row className="justify-content-center">
      <Col xs="10" lg="10" className="bg-warning">
        <select
          className="form-select"
          placeholder="Search..."
          onChange={searchItems}
          multiple
        >
          <option attr="role" value="FrontEnd">
            FrontEnd
          </option>
          <option attr="role" value="Fullstack">
            Fullstack
          </option>
          <option attr="level" value="Senior">
            Senior
          </option>

          <option attr="languages" value="JavaScript">
            Javascript
          </option>
          <option attr="languages" value="HTML">
            HTML
          </option>
          <option attr="tools" value="React">
            React
          </option>
        </select>
      </Col>
    </Row>
  );
}

export default Filter;
