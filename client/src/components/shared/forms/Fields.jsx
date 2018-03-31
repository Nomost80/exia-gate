import React from 'react';
import { Form, Popup } from 'semantic-ui-react';
import DayPicker from 'react-day-picker';
import DatePicker from 'react-datepicker';
import { controlPropsTypes } from "../../props";

export const TextField = props => <Form.Input {...props}/>;
TextField.propTypes = controlPropsTypes;

export const TextAreaField = props => <Form.TextArea {...props}/>;
TextAreaField.propTypes = controlPropsTypes;

export const CheckboxField = props => <Form.Checkbox {...props}/>;
CheckboxField.propTypes = controlPropsTypes;

export const SelectField = props => <Form.Select {...props}/>;
SelectField.propTypes = controlPropsTypes;

export const NumberField = props => <Form.Input {...props} type="number"/>;
NumberField.propTypes = controlPropsTypes;

export const DateField = props => (
  <Popup on="click" trigger={<Form.Input {...props}/>}>
    <Popup.Content>
      <DayPicker selectedDays={props.value} onDayClick={day => props.onChange()}/>
    </Popup.Content>
  </Popup>
)
DateField.propTypes = controlPropsTypes;

{/*<Popup on="click" trigger={<Form.Input {...props}/>}>*/}
{/*<Popup.Content>*/}
{/*<DatePicker inline selected={props.value} onChange={props.onChange}/>*/}
{/*</Popup.Content>*/}
{/*</Popup>;*/}
{/*<Form.Input {...props} selected={props.value} control={DatePicker} />;*/}
{/*<DatePicker*/}
  {/*customInput={<Form.Input {...props}/>}*/}
  {/*selected={props.value}*/}
  {/*onChange={props.onChange}*/}
{/*/>*/}

export const ImageField = props => (
  <div></div>
)

export default [
  TextField,
  TextAreaField,
  CheckboxField,
  SelectField,
  NumberField,
  DateField
]