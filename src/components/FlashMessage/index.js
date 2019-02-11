import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FlashMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  static defaultProps = {
    alertMessage: {}
  };

  static propTypes = {
    alert: PropTypes.object,
    dispatch: PropTypes.func,
    showAlert: PropTypes.bool,
    wait: PropTypes.number
  };

  onDismiss() {
    this.setState({ visible: false });
    this.props.dispatch({
      type: "HIDE_ALERT_MESSAGE",
      alertMessage: {}
    });
  }

  render() {
    const { alertMessage, showAlert } = this.props.alert;
    return (
      ((alertMessage && showAlert) &&
        <div className='container mt-5'>
          {alertMessage}
        </div>)
      || null
    );
  }
}

export default connect(state => ({ alert: state.alert || {}}))(FlashMessage);

