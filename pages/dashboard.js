import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState,useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";

const Dashboard=({ orders })=>{
  const [dashboardDetails, setDashboardDetails] = useState({
    publicKey: "",
    secretKey: "",
    sandboxProduction: "",
    expiryDay: 0,
    autoTriggerCheckBox: true,
  });
  const [isChecked, setIsChecked] = useState(false);
  const [buttonDisabled,setButtonDisabled]=useState(false)


  

  function onDashDetailChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "autoTriggerCheckBox") {
      setIsChecked(!isChecked);
      setDashboardDetails((values) => ({ ...values, [name]: isChecked }));
    } else if (name === "sandboxProduction") {
      setDashboardDetails((values) => ({ ...values, [name]: event.target.id }));
    } else {
      setDashboardDetails((values) => ({ ...values, [name]: value }));
    }
  }

  function onDashDetailsSubmition(e) {
    e.preventDefault();
    setDashboardDetails({
      publicKey: "",
      secretKey: "",
      sandboxProduction: "",
      expiryDay: 0,
      autoTriggerCheckBox: true,
    });

    clickHandler(dashboardDetails);
    async function clickHandler(enteredData) {
      console.log('enteredData',enteredData);

      const response = await fetch("/api/storeinfos", {
        method: "POST",
        body: JSON.stringify(enteredData),
        headers: 
        {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      console.log('data inserted successfullly....!!!!!',data);
     }
   
    
    setIsChecked(false);
  }
 
  return (
    <Container>
      <Row className="mb-2">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Settings</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/apiOrder/OrderApi">Refund with Apace</a>
          </li>
        </ul>
      </Row>
      <Row className="mainData">
      <Row className="settingData">
        <Row className="square border rounded">
          <Form >
            <Row className="square border-bottom p-2 m-2 d-flex align-items-center ">
              <Col>Change Api Key</Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Apace Public Key</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="publicKey"
                    value={dashboardDetails.publicKey}
                    onChange={onDashDetailChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Apace Secret Key</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    value={dashboardDetails.secretKey}
                    name="secretKey"
                    onChange={onDashDetailChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="square border-bottom p-2 m-2 d-flex align-items-center">
              <Col>Choose Production or Sandbox</Col>
              <Col>
                <Form.Group className="mb-3" id="sandboxProdcution">
                  <Form.Check
                    type="radio"
                    label="sandbox"
                    id="sandbox"
                    name="sandboxProduction"
                    onChange={onDashDetailChange}
                    checked={
                      dashboardDetails.sandboxProduction === "sandbox"
                    }
                  />
                  <Form.Check
                    type="radio"
                    label="production"
                    id="production"
                    name="sandboxProduction"
                    onChange={onDashDetailChange}
                    checked={
                      dashboardDetails.sandboxProduction === "production"
                    }
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="square border-bottom p-2 m-2 d-flex align-items-center">
              <Col>Automatic Shopify Refund</Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Number of days to expire the refund offer
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="expiryDay"
                    value={dashboardDetails.expiryDay}
                    min={0}
                    max={15}
                    onChange={onDashDetailChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="Enable the automatic trigger Shopify refund"
                    id="autoTriggerCheckBox"
                    checked={isChecked}
                    name="autoTriggerCheckBox"
                    value={dashboardDetails.autoTriggerCheckBox}
                    onChange={onDashDetailChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="square  p-2 m-2 ">
              <Col className="text-end">
                <Button variant="primary" type="submit" disabled={buttonDisabled} onClick={onDashDetailsSubmition}>
                  Save
                </Button>
              </Col>
            </Row>
          </Form>
        </Row>
        <Row className="mt-4">
          <h6 className="p-0">Login Apace</h6>
        </Row>

        <Row className="square border p-4 mt-2 rounded">
          <span>
            Click <Link href="https://sandbox.merchant.apacepayments.com/auth/login">here</Link> to login into apace
          </span>
        </Row>
        <Row className="mt-4">
          <h6 className="p-0">Support</h6>
        </Row>

        <Row className="square border p-4 mt-2 rounded">
          <span>
            For Support and app related queries,feel free to email us
            <a href="#"> here </a>
          </span>
        </Row>
      </Row>
        <Row className="square border rounded">
        <tbody>
              <tr>
                  <th>Order Id</th>
                  <th>Customer Id</th>
                  <th>Order Price</th>
                  <th>Order Status</th>
              </tr>
              
          </tbody>
        </Row>
      </Row>
    </Container>
  );
}

export async function getServerSideProps(context) {
  // fetch the blog posts from the mock API
  const res = await fetch('https://apaceindy.herokuapp.com/apiOrders');
  const orders = await res.json();
  console.log('orders',orders) 
  return {
    props: { orders } // props will be passed to the page
  };
}

export default Dashboard;




