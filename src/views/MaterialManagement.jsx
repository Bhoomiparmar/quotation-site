import React, { useEffect, useState } from "react";
import { Grid, Row, Col, Table,Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { GetAllMaterialsApi } from "../config";
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

function MaterialManagement(props) {
  const [materialmanagement, setMaterialManagement] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    _getAllMaterials();
  }, []);

  async function _getAllMaterials() {
    try {
      let res = await axios.get(GetAllMaterialsApi());
      let materialmanagement = res.data;
      console.log("material:", res);
      setMaterialManagement(materialmanagement);
    } catch (e) {
      setMaterialManagement([]);
    }
  }

  return (
    <div className="content">
      <Grid fluid>
        <Row>
          <Col md={12}>
            <div className={"text-right"} style={{ margin: "20px" }}>
            
                <Button onClick={handleShow}>Add Material</Button>
              
            </div>
            <Card
              title="Material Management"
              ctTableFullWidth
              ctTableResponsive
              content={
                <Table striped hover>
                  <thead>
                    <tr>
                      <th>Material Name</th>
                      <th>Material Code</th>
                      <th>Sequence</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {materialmanagement.map((item, index) => {
                      return (
                        <tr >
                          <td>{item.materialName}</td>
                          <td>{item.materialCode}</td>
                          <td>{item.sequence}</td>

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
          <Modal.Title>Add Material</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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

export default MaterialManagement;
