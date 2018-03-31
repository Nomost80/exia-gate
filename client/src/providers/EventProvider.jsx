// import React, { PureComponent } from 'react';
// import PropTypes from 'prop-props';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import * as actions from '../actions/eventActions';
// import { getEvents, getLoadings, getErrors } from "../selectors/eventSelector";
//
// const EventProvider = WrappedComponent => {
//   class WithEvents extends PureComponent {
//     static propTypes = {
//       events: PropTypes.array.isRequired,
//       eventActions: PropTypes.object.isRequired,
//       eventLoadings: PropTypes.object.isRequired,
//       eventErrors: PropTypes.object.isRequired
//     };
//
//     componentDidMount() {
//       this.props.eventActions.fetchEvents();
//     }
//
//     render() {
//       return <WrappedComponent {...this.props} />
//     }
//   }
//
//   const mapStateToProps = (state, ownProps) => ({
//     ...ownProps,
//     events: getEvents(state),
//     eventLoadings: getLoadings(state),
//     eventErrors: getErrors(state)
//   });
//
//   const mapDispatchToProps = dispatch => ({
//     eventActions: bindActionCreators(actions, dispatch)
//   });
//
//   return connect(mapStateToProps, mapDispatchToProps)(WithEvents)
// };
//
// export default EventProvider;