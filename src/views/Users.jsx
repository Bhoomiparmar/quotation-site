import React, { useEffect, useState } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import axios from "axios";
import { getAllUsersAPI } from "../config";
import { FaTimes, FaEdit, FaEye } from "react-icons/fa";

// const columns = [
//   { id: "name", label: "Name" },
//   { id: "phonenumber", label: "Phonenumber" },
//   { id: "email", label: "Email" },
// ];

function TableList(props) {
  const [verifiedusers, setVerifiedUsers] = useState([]);

  useEffect(() => {
    _getAllVerifiedUsers();
  }, []);

  async function _getAllVerifiedUsers() {
    try {
      let query = `?isVerified=true`;
      let res = await axios.get(getAllUsersAPI + query);
      let verifiedusers = res.data;
      console.log("res:", res);
      setVerifiedUsers(verifiedusers);
    } catch (e) {
      setVerifiedUsers([]);
    }
  }

  return (
    <div className="content">
      <Grid fluid>
        <Row>
          <Col md={12}>
            <Table striped hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {verifiedusers.map((item, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.phone}</td>
                      <td>{item.email}</td>
                      <td>
                        <FaTimes
                          style={{ marginRight: "10px", color: "#EE2D20" }}
                          //onClick={()=>{this.handleClick.delete(item)}}
                          //onDelete={()=>props.history.push({item})}
                        />
                        <FaEdit
                          style={{ marginRight: "10px", color: "#20C2EB" }}
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
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default TableList;
