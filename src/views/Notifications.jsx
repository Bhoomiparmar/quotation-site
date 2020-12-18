/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================


*/
import React, { useEffect , useState } from "react";
import {Grid, Row, Col, Alert, Table} from "react-bootstrap";
import axios from 'axios';
import Button from "components/CustomButton/CustomButton.jsx";
import {baseUrl, getAllUsersAPI} from "../config";
import {FaEdit, FaEye, FaTimes} from "react-icons/fa";
import {Link} from "react-router-dom";
import {HiOutlineMail} from "react-icons/hi";
import _ from 'underscore';

const columns = [
  {id: 'name', label: 'Name'},

];

function Notifications(props) {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [subject , setSubject] = useState('');
    const [users, setUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);


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


  async function _onSendEmail() {
        try {
          let data = {subject, body};
          let res = await axios.post( data,);
          console.log('res:', res);
        } catch (e) {

        } finally {
        }
    }

     async function _onSendPushNotification() {
        try {
          let url=baseUrl+'/notifications/send-notification'
          console.log('url:',url);
            let data = {users:selectedUsers,title, body};
            let res = await axios.post(url, data,);
            console.log('res:', res);

        } catch (e) {

        } finally {
        }
    }

    return (
      <div className="content">
        <Grid fluid>
          <div className="card">
            <div className="header">
              <h4 className="title">Notifications</h4>
              <p className="category">
                Handcrafted by{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/igorprado"
                >
                  Igor Prado
                </a>
                . Please checkout the{" "}
                <a
                  href="http://igorprado.com/react-notification-system/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  full documentation.
                </a>
              </p>
            </div>
            <div className="content">
              <Row>
                <Col md={6}>
                  <h5>Notifications Style</h5>
                  <Alert bsStyle="info">
                    <span>This is a plain notification</span>
                  </Alert>
                  <Alert bsStyle="info">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>This is a notification with close button.</span>
                  </Alert>
                  <Alert bsStyle="info" className="alert-with-icon">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span data-notify="icon" className="pe-7s-bell" />
                    <span data-notify="message">
                      This is a notification with close button and icon.
                    </span>
                  </Alert>
                  <Alert bsStyle="info" className="alert-with-icon">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span data-notify="icon" className="pe-7s-bell" />
                    <span data-notify="message">
                      This is a notification with close button and icon and have
                      many lines. You can see that the icon and the close button
                      are always vertically aligned. This is a beautiful
                      notification. So you don't have to worry about the style.
                    </span>
                  </Alert>
                </Col>
                <Col md={6}>
                  <h5>Notification states</h5>
                  <Alert bsStyle="info">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      <b> Info - </b> This is a regular notification made with
                      bsStyle="info"
                    </span>
                  </Alert>
                  <Alert bsStyle="success">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      <b> Success - </b> This is a regular notification made
                      with bsStyle="success"
                    </span>
                  </Alert>
                  <Alert bsStyle="warning">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      <b> Warning - </b> This is a regular notification made
                      with bsStyle="warning"
                    </span>
                  </Alert>
                  <Alert bsStyle="danger">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      <b> Danger - </b> This is a regular notification made with
                      bsStyle="danger"
                    </span>
                  </Alert>
                </Col>
              </Row>
              <br />
              <br />
              <div className="places-buttons">
                <Row>
                  <Col md={6} mdOffset={3} className="text-center">
                    <h5>
                      Notifications Places
                      <p className="category">Click to view notifications</p>
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col md={2} mdOffset={3}>
                  </Col>
                  <Col md={2}>
                    <Button
                      bsStyle="default"
                      block
                      onClick={() => this.props.handleClick("bc")}>
                      Send Email
                    </Button>
                  </Col>
                  <Col md={2}>

                    <label>
                      Title:
                      <input type="text" name="title" value={title} onChange={e=>setTitle(e.target.value)}/>
                    </label>
                    <label>
                      Body:
                      <input type="text" name="body" value={body} onChange={e=>setBody(e.target.value)}/>
                    </label>

                    {users.map((item,index)=>{
                      return(
                      <div style={{
                        flex: 1,
                        marginTop: 20,
                        width: 400,
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                      }}>
                        <div>
                          {`${item.name}`}
                        </div>


                        <input key={index} type="checkbox"
                               defaultChecked={item}
                               onChange={(e) => {
                                 let copy = _.clone(selectedUsers);
                                 if (e.target.checked) {
                                   copy.push(item.name);
                                 } else {
                                   let index = _.indexOf(copy, item.name);
                                   copy.splice(index, 1);
                                 }
                                 setSelectedUsers(copy);
                               }}/>

                      </div>
                      )})}

                    <Button
                      bsStyle="default"
                      block
                      onClick={()=> _onSendPushNotification() }>
                      Send Push Notification
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    );
}

export default Notifications;




