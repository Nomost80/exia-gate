import React, { PureComponent } from 'react';
import { array, bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Header, Icon } from 'semantic-ui-react';
import { getEvents } from "../../selectors/eventSelector";
import { fetchEvents, createEvent, deleteEvent } from "../../actions/eventActions";
import EventList from '../../components/events/EventList';

class EventsPage extends PureComponent {
  static propTypes = {
    events: array.isRequired,
    loading: bool.isRequired,
    fetchEvents: func.isRequired,
    createEvent: func.isRequired,
    deleteEvent: func.isRequired
  };

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const { events, loading, deleteEvent } = this.props;

    return (
      <Grid centered>
        <Grid.Column width={5}>
          <Header as="h3" dividing>
            <Icon name="calendar"/>
            <Header.Content>
              Listes des événements
            </Header.Content>
          </Header>
          <EventList
            loading={loading}
            events={events}
            onDelete={deleteEvent}
          />
        </Grid.Column>
      </Grid>
    );
  }
}



const mapStateToProps = state => ({
  events: getEvents(state),
  loading: state.events.loading
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents()),
  createEvent: event => dispatch(createEvent(event)),
  deleteEvent: id => dispatch(deleteEvent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage)