import React from 'react';
import AccountsUIWrapper from '../../imports/ui/AccountsUIWrapper.jsx';
import Header from './Header/Header.jsx';
import { Accounts } from 'meteor/accounts-base';

export const MainLayout = ({content}) => (

  <div className="main-layout">
    <Header />
    <div className="container">
    {content}
    </div>
  </div>
)
