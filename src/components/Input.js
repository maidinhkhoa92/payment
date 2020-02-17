import React from 'react';
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap';

export default ({ label, error, ...restProps }) => (
  <FormGroup>
    <FormLabel>{label}</FormLabel>
    <FormControl {...restProps} />
    {error && <small className="text-danger">{error}</small>}
  </FormGroup>
);
