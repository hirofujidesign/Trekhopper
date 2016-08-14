import React from 'react';
import AccountsUIWrapper from '../../imports/ui/AccountsUIWrapper.jsx';
import Header from './Header/Header.jsx';
import { Accounts } from 'meteor/accounts-base';

export const HomeLayout = ({content}) => (

  <div className="home-layout">

    <Header />
    {content}

  </div>
)
