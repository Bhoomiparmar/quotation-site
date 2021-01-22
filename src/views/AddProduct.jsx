import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

import Card from "components/Card/Card.jsx";

import { FormInputs } from "components/FormInputs/FormInputs.jsx";


function AddProduct(props) {
  return (
    <div className="content">
      <Grid fluid>
        <Row>
          <Col md={12}>
            <Card
              title="Product Management"
              ctTableFullWidth
              ctTableResponsive
              content={
                <>
                  <FormInputs
                    ncols={["col-md-6", "col-md-6"]}
                    properties={[
                      {
                        label: "Product Name",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "Product Name",
                      },
                      {
                        label: "Product Code",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "Product Code",
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

export default AddProduct;
