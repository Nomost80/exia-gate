import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Form } from 'antd';

const mapStateToProps = (state, ownProps) => ({
  error: state.errors[ownProps.name]
});

class Field extends PureComponent {
  render() {
    const { form, error } = this.props;

    return (
      <Form.Item>

      </Form.Item>
    )
  }
}

export default connect(mapStateToProps)(Field);