import React from 'react';
import { Form } from 'react-bootstrap';
import Styled from 'styled-components';

const StyledLabel = Styled(Form.Check)`
  display: block;
  position: relative;
  padding-left: 0px !important;
  margin-bottom: 12px;
  line-height: 30px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
  .& {
    width: 100%
  }
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    margin: 0px;
    padding: 0px;
    z-index: 1;
  }

  /* Create a custom radio button */
  label {
    position: relative;
    border-radius: 50%;
    padding-left: 30px;
  }

  label:after {
    content: " ";
    position: absolute;
    top: 4px;
    left: 0px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: url(/images/radio/no.svg) no-repeat;
  }

  input:checked ~ label:after {
    background: url(/images/radio/yes.svg) no-repeat;
  }
`;

export default ({ error, ...restProps }) => (
  <>
    <StyledLabel {...restProps} type="radio" />
    {error && <small className="text-danger">{error}</small>}
  </>
);
