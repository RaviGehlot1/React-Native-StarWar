import React from 'react'
import { Router, Scene, Stack } from "react-native-router-flux";
import Home from '../scene/Home'
import Details from '../scene/Details'

const Root = () => (
    <Router>
      <Stack key="root" >
        <Scene key="home" component={Home} hideNavBar={true} initial />
        <Scene key="details" component={Details} hideNavBar={true} />
      </Stack>
    </Router>
  );

  export default Root