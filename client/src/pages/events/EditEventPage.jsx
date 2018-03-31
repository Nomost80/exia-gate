import React from 'react';
import { object, bool, func } from 'prop-types';
import { Grid, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getEvent } from '../../selectors/eventSelector';
import { updateEvent } from '../../actions/eventActions';
import EventForm from '../../components/events/EventForm';

const EditEventPage = ({ event, loading, errors, updateEvent }) => (
  <Grid centered>
    <Grid.Column width={5}>
      <Header as="h3" dividing>
        <Icon name="calendar plus"/>
        <Header.Content>
          Modifier un événement
        </Header.Content>
      </Header>
      <EventForm
        data={event}
        loading={loading}
        errors={errors}
        onSubmit={updateEvent}
        redirect={`/events/${event.id}`}
      />
    </Grid.Column>
  </Grid>
);

const mapStateToProps = (state, ownProps) => ({
  event: getEvent(state, ownProps),
  loading: state.events.loading,
  errors: state.events.errors
});

const mapDispatchToProps = dispatch => ({
  updateEvent: event => dispatch(updateEvent(event))
});

EditEventPage.propTypes = {
  event: object.isRequired,
  loading: bool.isRequired,
  errors: object,
  updateEvent: func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEventPage);
