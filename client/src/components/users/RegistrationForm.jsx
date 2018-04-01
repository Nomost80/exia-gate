import React, { PureComponent } from 'react';
import { object, func, bool } from 'prop-types';
import { Form } from 'antd';
import { has } from 'lodash';

class RegistrationForm extends PureComponent {
  static propTypes = {
    form: object.isRequired,
    onSubmit: func.isRequired,
    errors: object,
    loading: bool
  };

  fieldStatus = name =>

  render() {
    const { getFieldDecorator, onSubmit } = this.props.form;

    return (
      <Form onSubmit={onSubmit}>
        <Form.Item validateStatus={}>

        </Form.Item>
      </Form>
    );
  }
}

export default RegistrationForm;