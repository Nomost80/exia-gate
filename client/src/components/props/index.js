import { number, bool, string, object, func, any, arrayOf, oneOfType } from 'prop-types';

export const formPropsTypes = {
  data: object.isRequired,
  loading: bool.isRequired,
  errors: object,
  onSubmit: func,
  redirect: string
};

export const controlPropsTypes = {
  width: number,
  required: bool,
  label: string,
  name: string.isRequired,
  placeholder: string,
  onChange: func.isRequired,
  value: any.isRequired,
  error: bool
};

export const eventType = {
  title: string.isRequired,
  tags: arrayOf(string),
  description: string.isRequired,
  question: string,
  place: string.isRequired,
  price: string,
  deadline: oneOfType([string, object]),
  date: oneOfType([string, object])
};