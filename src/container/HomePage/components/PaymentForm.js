import React from 'react';
import { Formik } from 'formik';
import { Form, Row, Col, Button, Alert, Image } from 'react-bootstrap';
import { Input, Select, Radio, Checkbox, Loading } from 'components';
import { DROPDOWN_DATA } from 'constant';
import { initialValues, validationSchema } from 'repositories/payment';
import ButtonSelect from './ButtonSelect';

export default ({ onSubmit }) => (
  <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {props => (
      <Form onSubmit={props.handleSubmit}>
        {props.errors && props.errors.msg && <Alert variant="danger">{props.errors.msg}</Alert>}
        {props.status && props.status.msg && <Alert variant="success">{props.status.msg}</Alert>}
        <Select
          label="Country / Region"
          options={DROPDOWN_DATA.countries}
          name="contry"
          error={props.errors.country}
        />
        <Radio label="Card" checked={true} />
        <Row>
          <Col xs="3">
            <ButtonSelect
              onClick={props.setFieldValue}
              name="type"
              value="visa"
              checked={props.values.type === 'visa'}
            >
              <Image src="/images/visa.png" />
            </ButtonSelect>
          </Col>
          <Col xs="3">
            <ButtonSelect
              onClick={props.setFieldValue}
              name="type"
              value="master"
              checked={props.values.type === 'master'}
            >
              <Image src="/images/master.png" />
            </ButtonSelect>
          </Col>
          <Col xs="3">
            <ButtonSelect
              onClick={props.setFieldValue}
              name="type"
              value="amex"
              checked={props.values.type === 'amex'}
            >
              <Image src="/images/amex.png" />
            </ButtonSelect>
          </Col>
          <Col xs="3">
            <ButtonSelect
              onClick={props.setFieldValue}
              name="type"
              value="discover"
              checked={props.values.type === 'discover'}
            >
              <Image src="/images/discover.png" />
            </ButtonSelect>
          </Col>
        </Row>
        <Input
          label="Card Number"
          onChange={props.handleChange}
          name="cardNumber"
          error={props.errors.cardNumber}
        />
        <Row>
          <Col xs="3">
            <Select
              label="Expiration"
              options={DROPDOWN_DATA.month}
              name="month"
              error={props.errors.month}
              onChange={props.setFieldValue}
            />
          </Col>
          <Col xs="3">
            <Select
              label="Expiration"
              options={DROPDOWN_DATA.year}
              name="year"
              error={props.errors.year}
              onChange={props.setFieldValue}
            />
          </Col>
          <Col xs="6">
            <Input
              label="Security Code"
              onChange={props.handleChange}
              name="securityCode"
              error={props.errors.securityCode}
            />
          </Col>
        </Row>
        <Checkbox
          label="Use as backup payment method for this account"
          name="agreed"
          onChange={props.handleChange}
          value={true}
        />
        <div className="mt-5">
          {props.isSubmitting ? <Loading /> : <Button type="submit">Submit</Button>}
        </div>
      </Form>
    )}
  </Formik>
);
