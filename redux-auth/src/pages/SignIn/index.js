import React, { Component } from 'react';
import { connect } from 'react-redux';

import { onChangePhone, onChangePassword } from '../../actions'; 

class SignInPage extends Component {

  onChange = (event) => {
    this.props.onChangePhone(event.target.value);
  }

  onSignIn = () => {
    //
  }

  render () {
    return (
      <div className="page">
        <div className="page-sign-in">
          <input
            type="text"
            placeholder="phone"
            onChange={this.onChange}
            value={this.props.phone}
          />
          <input
            type="text"
            placeholder="password"
            value={this.props.pass}
            onChange={event => this.props.onChangePassword(event.target.value)}
          />
          <button onClick={this.onSignIn}>Sign in</button>
        </div>
      </div>
    )
  }
}

// стейт редакса в пропсы компонента
const mapStateToProps = (state) => {
  return {
    phone: state.auth.phone,
    pass: state.auth.password,
  }
}

const actionsCreators = {
  onChangePhone,
  onChangePassword,
}

export default connect(mapStateToProps, actionsCreators )   (SignInPage);