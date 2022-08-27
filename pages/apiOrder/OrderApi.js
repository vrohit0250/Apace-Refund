import React from "react"
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
const OrdeResponse = ({ orders }) => {
  return (
    <React.Fragment>  
    <Container>
      <Row className="mb-2">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">Settings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/apiOrder/OrderApi">Link</a>
            </li>
          </ul>
        </Row>
        <Row className="square border rounded">
        <table class="table">
          <tbody>
              <tr>
                  <th scope="col">Order Id</th>
                  <th scope="col">Customer Id</th>
                  <th scope="col">Order Price</th>
                  <th scope="col">Order Status</th>
              </tr>
              {orders.map((order, i) => {
                return (
                <tr key={i}>
                <th scope="row">{order.id}</th>
                <td>{order.customer_id}</td>
                <td>{order.total_inc_tax}</td>
                <td>{order.status}</td>
                <td><button>Apace Refund</button></td>
                </tr>
                )    
              }) }
          </tbody>
          </table>
        </Row>
        </Container>
    </React.Fragment>
  )
}
export async function getServerSideProps(context) {
    // fetch the blog posts from the mock API
    const res = await fetch('http://localhost:8000/apiOrders');
    const orders = await res.json();
    console.log('orders',orders) 
    return {
      props: { orders } // props will be passed to the page
    };
  }
export default OrdeResponse