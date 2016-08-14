import React from 'react';
import {mount} from 'react-mounter'
import AccountsUIWrapper from '../imports/ui/AccountsUIWrapper.jsx';
import {MainLayout} from './layouts/MainLayout.jsx';
import {HomeLayout} from './layouts/HomeLayout.jsx';

import Form from '../imports/ui/components/Form/Form.jsx';
import AllTours from '../imports/ui/components/ToursDisplay/ToursDisplay.jsx';
import MyTours from '../imports/ui/components/ToursDisplay/MyTours.jsx';
import MainComp from '../imports/ui/components/MainPage/MainComp.jsx';
import GuideView from '../imports/ui/components/ToursDisplay/GuideView.jsx';

FlowRouter.route('/', {
  action() {
    mount(HomeLayout, {
      content : (<MainComp />)
    })
  }
});

FlowRouter.route('/maketour', {
  action() {
    mount(MainLayout, {
      content : (<Form />)
    })
  }
});

FlowRouter.route('/viewtours', {
  action() {
    mount(MainLayout, {
      content : (<AllTours />)
    })
  }
});

FlowRouter.route('/chosentours', {
  action() {
    mount(MainLayout, {
      content : (<MyTours />)
    })
  }
});

FlowRouter.route('/guideView', {
  action() {
    mount(MainLayout, {
      content : (<GuideView />)
    })
  }
});
