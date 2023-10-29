import React, {useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import api from "../api/api";

function Pagination() {

 const [totalRows, setTotalRows] = useState(0);


  api.countRows(setTotalRows);

  return (
    <Row className="justify-content-center">
      <Col xs="10" lg="10" className="bg-warning">
        <Stack direction="horizontal"  gap={2}>
            <span>First</span>
            <span>Prev</span>
            <span>1</span>
            {totalRows>2 && <span>2</span>}
            {totalRows>3 && <span>3</span>}
            {totalRows>4 && <span>.</span>}
            {totalRows>5 && <span>.</span>}
            <span>Next</span>
            <span>Last</span>

        </Stack>
      </Col>
    </Row>
  );
}

export default Pagination;
