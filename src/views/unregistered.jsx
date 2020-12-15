/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useEffect,useState} from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import axios from 'axios';
import Card from "components/Card/Card.jsx";
import {getAllUsersAPI,deleteUserAPI} from "../config";


const columns = [
    {id: 'name', label: 'Name'},
    {id: 'salary', label: 'Salary'},
    {id: 'country', label: 'Country'},
    {id: 'city', label: 'City'},
    {id: 'status', label: 'Status'},
];

function Unregistered(props) {
  
   const [users, setUsers] = useState([]);

useEffect(() => {
        _getAllUsers();
    }, []);



async function _getAllUsers() {
        try {
            let query = `?isVerified=true`;
            let res = await axios.get(getAllUsersAPI + query,);
            let users = res.data;
            console.log('res:', res);
            setUsers(users);  
        } catch (e) {
            setUsers([]);
        }
    }




    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Registered Users"
                category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {columns.map((item, key) => {
                          return <th key={Col.id}>{item.label}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((o, key) => {
                        return (
                          <tr key={Row.id}>
                            {columns.map((item, key) => {
                              let value = o[item.id];
                              return <td key={Row.id}>{value}</td>;
                            })}
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
      </div>
    );

}

export default Unregistered;
