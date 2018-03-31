import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import HomePage from '../../pages/HomePage';
import EventsPage from '../../pages/events/EventsPage';
import EventPage from '../../pages/events/EventPage';
import NewEventPage from '../../pages/events/NewEventPage';
import EditEventPage from '../../pages/events/EditEventPage';
import NoMatch from '../../pages/404';

const Body = () => (
  <Container fluid style={{marginTop: '75px'}}>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/events" component={EventsPage}/>
      <Route exact path="/events/new" component={NewEventPage}/>
      <Route exact path="/events/:id/edit" component={EditEventPage}/>
      <Route exact path="/events/:id" component={EventPage}/>
      <Route component={NoMatch} />
    </Switch>
  </Container>
);

export default Body;