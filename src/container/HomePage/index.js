import React, { useCallback, useMemo } from 'react';
import Template from './template';
import { paymentActions } from 'store/actions';
import { useDispatch } from 'react-redux';

const useConnect = () => {
  const dispatch = useDispatch();
  const dispatchToProps = useMemo(
    () => ({
      payment: params =>
        dispatch({ type: paymentActions.PAYMENT_REQUEST, params, meta: { thunk: true } })
    }),
    [dispatch]
  );
  return {
    ...dispatchToProps
  };
};

export default () => {
  const { payment } = useConnect();

  const onPayment = useCallback(async (values, actions) => {
    try {
      actions.setSubmitting(true);
      await payment(values);

      actions.setStatus({ msg: 'Success' });
    } catch (e) {
      actions.setErrors({
        msg: e
      });
    } finally {
      actions.setSubmitting(false);
    }
  }, []);
  return <Template onPayment={onPayment} />;
};
