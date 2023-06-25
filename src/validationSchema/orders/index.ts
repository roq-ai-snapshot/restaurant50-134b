import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  order_status: yup.string().required(),
  customer_id: yup.string().nullable().required(),
  restaurant_table_id: yup.string().nullable().required(),
});
