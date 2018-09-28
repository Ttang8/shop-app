import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    This is the App
    <AuthRoute path="/login" component={SessionFormContainer}/>
  </div>
);

export default App;
