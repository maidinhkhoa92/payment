import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Result, PaymentForm } from './components';

export default ({ onPayment }) => (
  <Container fluid className="py-4">
    <Row>
      <Col>
        <Result />
      </Col>
      <Col>
        <PaymentForm onSubmit={onPayment} />
      </Col>
    </Row>
  </Container>
);
