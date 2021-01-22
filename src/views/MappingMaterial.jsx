import React, { useEffect, useState } from "react";
import { Grid, Row, Col, Table, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { GetAllMapMaterialsApi } from "../config";
import { FaTimes, FaEdit, FaEye } from "react-icons/fa";
import Card from "components/Card/Card.jsx";
import { HiOutlineMail } from "react-icons/hi";
import Button from "components/CustomButton/CustomButton.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Select from "react-select";

// const columns = [
//   { id: "name", label: "Name" },
//   { id: "phonenumber", label: "Phonenumber" },
//   { id: "email", label: "Email" },
// ];

function MappingMaterial(props) {
  const [mappingmaterials, setMappingMaterials] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    _getAllMappingMaterials();
  }, []);

  async function _getAllMappingMaterials() {
    try {
      let res = await axios.get(GetAllMapMaterialsApi());
      let mappingmaterials = res.data;
      console.log("mapping:", res);
      setMappingMaterials(mappingmaterials);
    } catch (e) {
      setMappingMaterials([]);
    }
  }

  return (
    <div className="content">
      <Grid fluid>
        <Row>
          <Col md={12}>
            <div className={"text-right"} style={{ margin: "20px" }}>
              <Button onClick={handleShow}>Add Mapping Material</Button>
            </div>
            <Card
              title="Mapping Material"
              ctTableFullWidth
              ctTableResponsive
              content={
                <Table striped hover>
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Sub Product Code</th>
                      <th>Material Name</th>
                      <th>Material Code</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mappingmaterials.map((item, index) => {
                      return (
                        <tr>
                          <td>{item.productName}</td>
                          <td>{item.subProductName}</td>
                          <td>{item.materialName}</td>
                          <td></td>
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
                  title="Mapping Material"
                  ctTableFullWidth
                  ctTableResponsive
                  content={
                    <>
                      <Row>
                        <Col sm={4} md={4} lg={4} style={{ padding: "20px" }}>
                          <p>Product Name</p>
                          <Select
                            options={"options"}
                            placeholder="Product Name"
                          />
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

export default MappingMaterial;
