import * as Yup from 'yup'

// eslint-disable-next-line import/prefer-default-export
export const ENQUIRY_FORM_SCHEMAS = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  phone: Yup.string().required('Phone number is required'),
  email: Yup.string()
    .required('Email is required')
    .max(50, 'Email must be at most 50 characters')
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,5}))$/,
      'Please enter a valid email'
    ),
})
