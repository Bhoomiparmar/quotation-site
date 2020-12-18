import React, { useEffect, useState } from "react";
import {Grid, Row, Col, Tabs, Tab, Table, Button} from "react-bootstrap";
import axios from 'axios';
import TableList from "../views/TableList";
import {getAllLeadAPI} from "../config";
import {FaEdit, FaEye, FaTimes} from "react-icons/fa";
import {Link} from "react-router-dom";
import {HiOutlineMail} from "react-icons/hi";


const columns = [
    {id: 'buyerName', label: 'BuyerName'},
    {id: 'product', label: 'Product'},
    {id: 'material', label: 'Material'},
    {id: 'grade', label: 'Grade'},
    {id: 'subCategory', label: 'Material'},
    {id: 'productName', label: 'Material'},
    {id: 'productDescription', label: 'Material'},
    {id: 'location', label: 'Material'},
    {id: 'receivedquotationSellerId' , label:'ReceivedQuotationSellerId'},
    {id: 'status', label: 'Status'},


];


function Typography(props) {
  const [leads,setLeads] = useState([]);


     useEffect(() => {
        _getAllLeads();
    }, []);



async function _getAllLeads() {
        try {
            let res = await axios.get(getAllLeadAPI,);
            let leads = res.data;
            console.log('res:', res);
            setLeads(leads);
        } catch (e) {
            setLeads([]);
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
                              {columns.map((item, key) => {
                                  return <th key={Col.id}>{item.label}</th>;
                              })}
                          </tr>
                          </thead>
                          <tbody>
                          {leads.map((o, key) => {
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
                  </Col>
              </Row>

      </Grid>
    </div>
  );
}

export default Typography;



