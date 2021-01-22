import React, { useEffect, useState } from "react";
import { Grid, Row, Col, Table, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { GetAllSubProductsApi } from "../config";
import { FaTimes, FaEdit, FaEye } from "react-icons/fa";
import Card from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Select from "react-select";

// const columns = [
//   { id: "name", label: "Name" },
//   { id: "phonenumber", label: "Phonenumber" },
//   { id: "email", label: "Email" },
// ];

function SubProduct(props) {
  const [subproduct, setSubProduct] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    _getAllSubProducts();
  }, []);

  async function _getAllSubProducts() {
    try {
      let res = await axios.get(GetAllSubProductsApi());
      let subproduct = res.data;
      console.log("subProduct:", res);
      setSubProduct(subproduct);
    } catch (e) {
      setSubProduct([]);
    }
  }

  return (
    <div className="content">
      <Grid fluid>
        <Row>
          <Col md={12}>
            <div className={"text-right"} style={{ margin: "20px" }}>
              <Button onClick={handleShow}>Add Sub Product</Button>
            </div>
            <Card
              title="Sub Product Management"
              ctTableFullWidth
              ctTableResponsive
              content={
                <Table striped hover>
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Sub Product Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subproduct.map((item, index) => {
                      return (
                        <tr>
                          <td>{item.productName}</td>
                          <td>{item.subProductName}</td>
                          <td>
                            <FaTimes
                              style={{
                                marginRight: "10px",
                                color: "#EE2D20",
                              }}
                            />
                            <FaEdit
                              style={{
                                marginRight: "10px",
                                color: "#20C2EB",
                              }}
                              onClick={() =>
                                props.history.push("/UserProf", { item })
                              }
                            />
                            <FaEye style={{ marginRight: "10px" }} />
                          </td>
                          <td></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              }
            />
          </Col>
        </Row>
      </Grid>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                        <Col
                          sm={12}
                          md={12}
                          lg={12}
                          style={{ padding: "20px" }}
                        >
                          <p>Product Name</p>
                          <Select
                            options={"options"}
                            placeholder="Product Name"
                          />
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SubProduct;
