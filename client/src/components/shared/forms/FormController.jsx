import React, { PureComponent, Children, cloneElement } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Button, Spin } from 'antd';

class FormController extends PureComponent {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err)
        this.props.onSubmit(values);
    })
  };

  reset = () => this.props.form.resetFields();

  renderField = field => {
    if (!field) return null;
    else if (field.type === Form.Item) {
      return cloneElement(field, { form: this.props.form });
    }
    return cloneElement(field, { style: { margin: '0 0 1em' } });
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
            Reset
          </Button>
        }
        <Spin spinning={loading}/>
      </Form>
    );
  }
}

const mapPropsToField = props => ({

});

export default Form.create({})(FormController);