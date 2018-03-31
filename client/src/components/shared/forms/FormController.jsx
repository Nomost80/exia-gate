import React, { PureComponent, Children, cloneElement } from 'react';
import { object, node, oneOfType, arrayOf, bool } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Form, Message } from 'semantic-ui-react';
import { get, entries, some, has } from 'lodash';
import { formPropsTypes } from "../../props";
import FieldTypes from './Fields';

//todo validation client
class FormController extends PureComponent {
  static propTypes = {
    history: object.isRequired,
    children: oneOfType([node, arrayOf(node)]).isRequired,
    submit: bool,
    reset: bool,
    ...formPropsTypes
  };

  initialState = { ...this.props.data };

  state = this.initialState;

  handleChange = (e, { name, value }) =>
    this.setState({...this.state, [name]: value});

  handleSubmit = () =>
    this.props.onSubmit(this.state).then(this.redirect);

  reset = () => this.setState(this.initialState);

  redirect = () => {
    const { history, redirect } = this.props;
    if (redirect) history.push(history);
  };

  renderField = field => {
    if (!field) return null; // un champ conditionnel pas validé
    else if (some(FieldTypes, fieldType => field.type === fieldType)) {
      return cloneElement(field, {
        onChange: this.handleChange,
        value: get(this.state, field.props.name, field.props.value),
        error: has(this.props.errors, field.props.name)
      });
    }
    else if (field.type === Form.Group) {
      const childrens = Children.map(field.props.children, this.renderField);
      return cloneElement(field, {}, childrens);
    }
    return cloneElement(field, {style: {margin: '0 0 1em'}});
  };

  render() {
    const { children, submit, reset, loading, errors } = this.props;

    return (
      <Form loading={loading}>
        {errors &&
          <Message error header="Echec de la validation" list={entries(errors)}/>
        }
        {Children.map(children, this.renderField)}
        {submit &&
          <Form.Button
            type="submit"
            positive={true}
            content="Valider"
            onClick={this.handleSubmit}
          />
        }
        {reset &&
          <Form.Button
            type="reset"
            negative={true}
            content="Reset"
            onClick={this.reset}
          />
        }
      </Form>
    );
  }
}

export default withRouter(FormController);