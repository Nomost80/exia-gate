import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid, Header, Icon } from 'semantic-ui-react';
import { getEvent } from "../../selectors/eventSelector";
import { fetchEvent } from "../../actions/eventActions";

class EventPage extends PureComponent {
  static propTypes = {
    event: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { fetchEvent, match } = this.props;
    fetchEvent(match.params.id);
  };

  render() {
    const { event } = this.props;

    return (
      <Grid centered>
        <Grid.Column width={5}>
          <Header as="h3" dividing>
            <Icon name="calendar"/>
            <Header.Content>
              {event.title}
            </Header.Content>
          </Header>

        </Grid.Column>
      </Grid>
    )
  };
}

const mapStateToProps = (state, ownProps) => ({
  event: getEvent(state, ownProps)
});

const mapDispatchToProps = dispatch => ({
  fetchEvent: id => dispatch(fetchEvent(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventPage));
