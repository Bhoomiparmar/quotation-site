import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Select from "react-select";

function AddGrades(props) {
  return (
    <div className="content">
      <Grid fluid>
        <Row>
          <Col md={12}>
            <Card
              title="Grades Management"
              ctTableFullWidth
              ctTableResponsive
              content={
                <>
                  <Row>
                    <Col sm={4} md={4} lg={4} style={{ padding: "20px" }}>
                      <p>Product Name</p>
                      <Select options={"options"} placeholder="Product Name" />
                    </Col>
                    <Col sm={4} md={4} lg={4} style={{ padding: "20px" }}>
                      <p>Sub Product Name</p>
                      <Select
                        options={"options"}
                        placeholder="Sub Product Name"
                      />
                    </Col>
                    <Col sm={4} md={4} lg={4} style={{ padding: "20px" }}>
                      <p>Material</p>
                      <Select options={"options"} placeholder="Material" />
                    </Col>
                  </Row>
                  <FormInputs
                    ncols={["col-md-6", "col-md-6"]}
                    properties={[
                      {
                        label: "Grade Name",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "Grade Name",
                      },
                      {
                        label: "Equivalent Grades",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "Equivalent Grades",
                      },
                    ]}
                  />

                  <FormInputs
                    ncols={["col-md-12"]}
                    properties={[
                      {
                        label: "Search Tags",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "Search Tag",
                      },
                    ]}
                  />
                </>
              }
            />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default AddGrades;
