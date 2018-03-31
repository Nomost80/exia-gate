import React, { PureComponent, Children, cloneElement } from 'react';
import { node, element } from 'prop-types';
import { Modal, Button } from 'semantic-ui-react';

class FormModal extends PureComponent {
  static propTypes = {
    trigger: node.isRequired,
    children: node.isRequired
  };

  renderForm = () => {
    const form = Children.only(this.props.children);
    return cloneElement(form, {
      ref: instance => this.form = instance,
      submit: false,
      reset: false
    });
  };

  handleSubmit = () => {
    this.form.handleSubmit();
  };

  render() {
    const { trigger } = this.props;

    return (
      <Modal trigger={trigger}>
        <Modal.Header>
          Test
        </Modal.Header>
        <Modal.Content>
          {this.renderForm()}
        </Modal.Content>
        <Modal.Actions>
          <Button negative>Annuler</Button>
          <Button positive onClick={this.handleSubmit}>Valider</Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default FormModal;