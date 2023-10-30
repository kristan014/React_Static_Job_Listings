import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

function Pagination(props) {
  return (
    <Row className="justify-content-center">
      <Col xs="10" lg="10" className="bg-warning">
        <Stack direction="horizontal" gap={2}>
          {/* display only if the current page is greater than 1 */}
          {props.currentPage > 1 && (
            <span
              onClick={() => {
                props.setCurrentPage(1);
                props.updateState();
              }}
            >
              First
            </span>
          )}
          {/* display only if the current page is greater than 1 */}
          {props.currentPage > 1 && (
            <span
              onClick={() => {
                props.setCurrentPage(props.currentPage - 1);
                props.updateState();
              }}
            >
              Prev
            </span>
          )}

          {/* displays the current page*/}
          <span>{props.currentPage}</span>

          {/* display only if the current page is less than total number of pages */}
          {props.currentPage < props.totalPage && (
            <span
              onClick={() => {
                props.setCurrentPage(props.currentPage + 1);
                props.updateState();
              }}
            >
              Next
            </span>
          )}
          {props.currentPage < props.totalPage  && (
            <span
              onClick={() => {
                props.setCurrentPage(props.totalPage);
                props.updateState();
              }}
            >
              Last
            </span>
          )}
        </Stack>
      </Col>
    </Row>
  );
}

export default Pagination;
