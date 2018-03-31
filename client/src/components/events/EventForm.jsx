import React, { PureComponent } from 'react';
import { shape } from 'prop-types';
import { Form } from 'semantic-ui-react';
import FormController from '../shared/forms/FormController';
import { formPropsTypes, eventType } from "../props";
import { TextField, TextAreaField, DateField } from '../shared/forms/Fields';

class EventForm extends PureComponent {
  render() {
    return (
      <FormController {...this.props}>
        <TextField
          required
          label="Titre"
          name="title"
          placeholder="Titre"
        />
        <TextAreaField
          required
          autoHeight
          rows={3}
          label="Description"
          name="description"
          placeholder="Description"
        />
        <TextAreaField
          required
          autoHeight
          rows={2}
          label="Information(s) nécessaire(s)"
          name="question"
          placeholder="Information(s) nécessaire(s)"
        />
        <TextField
          required
          label="Nom de l'utilisateur"
          name="user.name"
          placeholder="Nom de l'utilisateur"
        />
        <Form.Group>
          <TextField
            width={12}
            required
            label="Lieu"
            name="place"
            placeholder="Lieu"
            icon="location arrow"
          />
          <TextField
            width={4}
            label="Prix"
            name="price"
            placeholder="Prix"
            icon="euro"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <DateField
            required
            label="Deadline du choix de la date"
            name="voteDeadline"
            placeholder="Deadline du choix de la date"
            icon="calendar"
          />
          <DateField
            required
            label="Deadline pour participer"
            name="enrollmentDeadline"
            placeholder="Deadline pour participer"
            icon="calendar"
          />
        </Form.Group>
      </FormController>
    );
  }
}

EventForm.propTypes = {
  ...formPropsTypes,
  data: shape(eventType)
};

export default EventForm;