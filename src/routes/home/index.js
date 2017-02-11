/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
//import Home from './Home';
import WishList from '../../components/WishList';
import Layout from '../../components/Layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default {

  path: '/',

  async action() {
    return {
      title: 'Your WishList',
      component: <Layout><MuiThemeProvider><WishList title={'Your WishList'} /></MuiThemeProvider></Layout>,
    };
  },

};
