import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import EnterpriseList from '~/pages/EnterpriseList';
import EnterpriseInfo from '~/pages/EnterpriseInfo';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/enterprises" exact component={EnterpriseList} isPrivate />
      <Route path="/enterprises/:id" component={EnterpriseInfo} isPrivate />
    </Switch>
  );
}
