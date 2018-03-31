import React from 'react';
import { bool, array, func } from 'prop-types';
import { List, Loader } from 'semantic-ui-react';
import EventListItem from './EventListItem';

const EventList = ({ loading, events, onDelete }) => (
  <List>
    {events.map(event =>
      <EventListItem key={`event-${event.id.$oid}`} event={event} onDelete={onDelete}/>
    )}
    <Loader active={loading}>
      Fetching events
    </Loader>
  </List>
);

EventList.propTypes = {
  loading: bool.isRequired,
  events: array.isRequired,
  onDelete: func.isRequired
};

export default EventList;