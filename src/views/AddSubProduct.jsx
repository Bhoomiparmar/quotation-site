import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Select from "react-select";

function AddSubProduct(props) {
  return (
    <div className="content">
      <Grid fluid>
        <Row>
          <Col md={12}>
            <Card
              title="Sub Product Management"
              ctTableFullWidth
              ctTableResponsive
              content={
                <>
                  <Row>
                    <Col sm={12} md={12} lg={12} style={{ padding: "20px" }}>
                      <p>Product Name</p>
                      <Select options={"options"} placeholder="Product Name" />
                    </Col>
                  </Row>

                  <FormInputs
                    ncols={["col-md-6", "col-md-6"]}
                    properties={[
                      {
                        label: "Sub Product Name",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "Material Name",
                      },
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

export default AddSubProduct;
