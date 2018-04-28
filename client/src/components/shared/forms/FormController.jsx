import React, { PureComponent, Children, cloneElement } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Button, Progress } from 'antd';

class FormController extends PureComponent {
  handleSubmit = e => {
    e.preventDefault();
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

  // faire le map props to field
  renderField = field => {
    if (!field) return null; // un champ conditionnel pas validé

    else if (field.type === Form.Item) {
      return cloneElement(field, { form: this.props.form });
    }

    return cloneElement(field, {style: {margin: '0 0 1em'}});
  };

  render() {
    const { children, reset, progress } = this.props;

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
        {progress && <Progress percent={progress}/>}
      </Form>
    );
  }
}

const mapPropsToField = props => ({

});

export default Form.create({})(FormController);