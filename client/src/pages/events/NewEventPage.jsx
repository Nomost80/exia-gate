import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Grid, Header, Icon, Button } from 'semantic-ui-react';
import { createEvent } from "../../actions/eventActions";
import FormModal from '../../components/shared/forms/FormModal';
import EventForm from '../../components/events/EventForm';

const event = {
  title: '',
  description: '',
  question: '',
  place: '',
  price: '',
  voteDeadline: '',
  enrollmentDeadline: '',
  user: {
    name: '',
    email: ''
  },
  recurrences: []
};

const NewEventPage = ({ loading, errors, createEvent }) => (
  <Grid centered>
    <Grid.Column width={5}>
      <Header as="h3" dividing>
        <Icon name="calendar plus"/>
        <Header.Content>
          Créer un événement
        </Header.Content>
      </Header>
      <FormModal trigger={<Button>Test modal</Button>}>
        <EventForm
          data={event}
          loading={loading}
          errors={errors}
          onSubmit={createEvent}
          redirect="/events"
        />
      </FormModal>
    </Grid.Column>
  </Grid>
);

const mapStateToProps = state => ({
  loading: state.events.loading,
  errors: state.events.errors
});

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(createEvent(event))
});

NewEventPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  errors: PropTypes.object,
  createEvent: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(NewEventPage);
