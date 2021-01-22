import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";

function AddMaterial(props) {
  return (
    <div className="content">
      <Grid fluid>
        <Row>
          <Col md={12}>
            <Card
              title="Material Management"
              ctTableFullWidth
              ctTableResponsive
              content={
                <>
                  <FormInputs
                    ncols={["col-md-6", "col-md-6"]}
                    properties={[
                      {
                        label: "Material Name",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "Material Name",
                      },
                      {
                        label: "Material Code",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "Material Code",
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

export default AddMaterial;
