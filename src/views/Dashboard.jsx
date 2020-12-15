/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

*/
import React, { useEffect , useState } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import axios from 'axios';
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import {getAllLeadAPI,registerAPI} from "../config";

import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";

export default function Dashboard(props) {

function createLegend(json){
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  


    const [totalleads , setTotalleads] = useState([]);
    const [buyingleads , setBuyingleads] = useState([]);
    const [sellingleads , setSellingleads] = useState([]);
    const [registeruser , setRegisteruser] = useState([]);


    useEffect(() => {
        _getTotalLeads();
        _getBuyingLeads();
        _getSellingLeads();
        _getRegisteredUsers();
    }, []);

    async function _getTotalLeads() {
        try {
            let query = '?leads=true';
            let res = await axios.get(getAllLeadAPI + query,);
            let totalleads = res.data;
            console.log('res:', res);
            setTotalleads(totalleads);
        } catch (e) {
            setTotalleads([]);
        }
    }

   async function _getRegisteredUsers() {
        try {
            let query = `?isVerified=true`;
            let res = await axios.get(registerAPI + query,);
            let registerusers = res.data;
            console.log('res:', res);
            setRegisteruser(registerusers);  
        } catch (e) {
            setRegisteruser([]);
        }
    }

    async function _getBuyingLeads() {
        try {
            let query = `?isBuyingleads=true`;
            let res = await axios.get(getAllLeadAPI + query,);
            let buyingleads = res.data;
            console.log('res:', res);
            setBuyingleads(buyingleads);  
        } catch (e) {
            setBuyingleads([]);
        }
    }

async function _getSellingLeads() {
        try {
            let query = `?isSellingleads=true`;
            let res = await axios.get(getAllLeadAPI + query,);
            let sellingleads = res.data;
            console.log('res:', res);
            setSellingleads(sellingleads);  
        } catch (e) {
            setSellingleads([]);
        }
    }







 
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="Total Leads"
                statsValue={setTotalleads}
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Registered User"
                statsValue={setRegisteruser}
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Last day"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="Buying Leads"
                statsValue={setBuyingleads}
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last hour"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-twitter text-info" />}
                statsText="Selling Leads"
                statsValue={setSellingleads}
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Users Behavior"
                category="24 Hours performance"
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataSales}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{createLegend(legendSales)}</div>
                } 
              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Email Statistics"
                category="Last Campaign Performance"
                stats="Campaign sent 2 days ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{createLegend(legendPie)}</div>
                }
              />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Card
                id="chartActivity"
                title="2014 Sales"
                category="All products including Taxes"
                stats="Data information certified"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{createLegend(legendBar)}</div>
                }
              />
            </Col>

            <Col md={6}>
              <Card
                title="Tasks"
                category="Backend development"
                stats="Updated 3 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      <Tasks />
                    </table>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
}