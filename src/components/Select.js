import React, { useCallback } from 'react';
import { FormGroup, FormLabel } from 'react-bootstrap';
import Select from 'react-select';

export default ({ label, name, onChange, error, ...restProps }) => {
  const onSetValue = useCallback(
    selected => {
      onChange(name, selected);
    },
    [name, onChange]
  );
  return (
    <FormGroup>
      <FormLabel>{label}</FormLabel>
      <Select {...restProps} onChange={onSetValue} />
      {error && <small className="text-danger">{error}</small>}
    </FormGroup>
  );
};
