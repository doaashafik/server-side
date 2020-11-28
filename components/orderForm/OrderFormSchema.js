let yup = require('yup');
 
export let schema = yup.object().shape({
  address: yup.string().required(),
  phone: yup.number().required(),
  email: yup.string().email().required(),
});