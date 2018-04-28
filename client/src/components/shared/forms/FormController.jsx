import React, { PureComponent, Children, cloneElement } from 'react';
import { object, node, oneOfType, arrayOf, bool } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Form, Button } from 'antd';
import { get, entries, some, has } from 'lodash';
import { formPropsTypes } from "../props";
import FieldTypes from '../shared/forms/Fields';

class FormController extends PureComponent {
  static propTypes = {
    children: oneOfType([node, arrayOf(node)]).isRequired,
    form: object.isRequired,
    reset: bool,
    ...formPropsTypes
  };

  handleSubmit = () => {
    this.props.form.validateFields((err, values) => {
      if (!err)
        this.props.onSubmit(values);
    })
  };

  reset = () => this.props.form.resetFields();

  redirect = () => {
    const { submited, redirect } = this.props;
    if (submited && redirect)
      return <Redirect to={redirect} />
  };

  renderField = field => {
    if (!field) return null; // un champ conditionnel pas validé
    else if (some(FieldTypes, fieldType => field.type === fieldType)) {
      return cloneElement(field, {
        onChange: this.handleChange,
        value: get(this.state, field.props.name, field.props.value),
        validateStatus: has(this.props.errors, field.props.name) ? 'error' : '',
        help: get(this.props.errors, field.props.name, '')
      });
    }
    else if (field.type === Form.Group) {
      const childrens = Children.map(field.props.children, this.renderField);
      return cloneElement(field, {}, childrens);
    }
    return cloneElement(field, {style: {margin: '0 0 1em'}});
  };

  render() {
    const { children, reset, loading } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        {Children.map(children, this.renderField)}
        <Button type="primary" htmlType="submit">
          Valider
        </Button>
        {reset &&
          <Button type="primary" onClick={this.reset}>
            Effacer
          </Button>
        }
      </Form>
    );
  }
}

export default Form.create({})(FormController);