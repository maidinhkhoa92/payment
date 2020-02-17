import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'components';
// import style
import 'style/index.scss';

const RootContainer = props => {
  return <Suspense fallback={<Loading />}>{props.children}</Suspense>;
};
RootContainer.propTypes = {
  children: PropTypes.node
};
export default RootContainer;
