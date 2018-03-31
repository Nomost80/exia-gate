import React from 'react';
import { object, func } from 'prop-types';
import { List } from 'semantic-ui-react';

const EventListItem = ({ event }) => (
  <List.Item>
    {event.title}
  </List.Item>
);

EventListItem.propTypes = {
  event: object.isRequired,
  onDelete: func.isRequired
};

export default EventListItem;