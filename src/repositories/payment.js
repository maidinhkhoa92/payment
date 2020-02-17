import * as Yup from 'yup';

export const initialValues = {
  country: '',
  cardNumber: '',
  month: '',
  year: '',
  type: 'visa',
  securityCode: '',
  agreed: false
};

export const validationSchema = Yup.object({
  country: Yup.string().required('Required'),
  cardNumber: Yup.string().required('Required'),
  month: Yup.string().required('Required'),
  year: Yup.string().required('Required'),
  type: Yup.string().required('Required'),
  securityCode: Yup.string()
    .max(3, 'Security code only has3 numbers')
    .required('Required'),
  agreed: Yup.bool()
});
