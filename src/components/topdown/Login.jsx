import React from 'react';
import LabelInput from './LabelInput';
import EmailInput from './EmailInput';

export default class Login extends React.Component {
  render () {
    return (
      <div>
        <form>
          <div className="inset">
            <div>
              <EmailInput id="id" name="id" type="text" labelText="ID" />
            </div>
            <div>
              <LabelInput
                id="password"
                name="password"
                type="password"
                labelText="PASSWORD"
              />
            </div>
          </div>
          <div className="p-container">
            <input type="submit" id="login" value="Login" />
          </div>
        </form>
      </div>
    );
  }
}
