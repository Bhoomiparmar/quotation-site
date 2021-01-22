import React, { useEffect, useState } from "react";
import { Grid, Row, Col, Table, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { GetAllProductsApi } from "../config";
import { FaTimes, FaEdit, FaEye } from "react-icons/fa";
import Card from "components/Card/Card.jsx";
import { HiOutlineMail } from "react-icons/hi";
import Button from "components/CustomButton/CustomButton.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";

// const columns = [
//   { id: "name", label: "Name" },
//   { id: "phonenumber", label: "Phonenumber" },
//   { id: "email", label: "Email" },
// ];

function ProductManagement(props) {
  const [productname, setProductName] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    _getAllProducts();
  }, []);

  async function _getAllProducts() {
    try {
      let res = await axios.get(GetAllProductsApi());
      let productname = res.data;
      console.log("product:", res);
      setProductName(productname);
    } catch (e) {
      setProductName([]);
    }
  }

  return (
    <div className="content">
      <Grid fluid>
        <Row>
          <Col md={12}>
            <div className={"text-right"} style={{ margin: "20px" }}>
              <Button onClick={handleShow}>Add Product</Button>
            </div>
            <Card
              title="Product Management"
              ctTableFullWidth
              ctTableResponsive
              content={
                <Table striped hover>
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Product Code</th>
                      <th>Sequence</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <tbody>
                       {productname.map((item, index) => {
                        return (
                          <tr>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
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
                    </tbody>*/}

                    <tr>
                      <td>Pipes</td>
                      <td>pipes</td>
                      <td></td>
                      <td>
                        <FaTimes
                          style={{ marginRight: "10px", color: "#EE2D20" }}
                        />
                        <FaEdit
                          style={{ marginRight: "10px", color: "#20C2EB" }}
                        />
                        <FaEye style={{ marginRight: "10px" }} />
                      </td>
                    </tr>
                    <tr>
                      <td>Pipe Fitting</td>
                      <td>pipe-fitting</td>
                      <td>2</td>
                      <td>
                        <FaTimes
                          style={{ marginRight: "10px", color: "#EE2D20" }}
                        />
                        <FaEdit
                          style={{ marginRight: "10px", color: "#20C2EB" }}
                        />
                        <FaEye style={{ marginRight: "10px" }} />
                      </td>
                    </tr>
                    <tr>
                      <td>Tubing</td>
                      <td>tubing</td>
                      <td>3</td>
                      <td>
                        <FaTimes
                          style={{ marginRight: "10px", color: "#EE2D20" }}
                        />
                        <FaEdit
                          style={{ marginRight: "10px", color: "#20C2EB" }}
                        />
                        <FaEye style={{ marginRight: "10px" }} />
                      </td>
                    </tr>
                    <tr>
                      <td>Duplex Steel</td>
                      <td></td>
                      <td></td>
                      <td>
                        <FaTimes
                          style={{ marginRight: "10px", color: "#EE2D20" }}
                        />
                        <FaEdit
                          style={{ marginRight: "10px", color: "#20C2EB" }}
                        />
                        <FaEye style={{ marginRight: "10px" }} />
                      </td>
                    </tr>
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

export default ProductManagement;
