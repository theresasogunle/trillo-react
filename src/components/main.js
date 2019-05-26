import React from 'react'
import Container from './container';

import {Switch,Route}from 'react-router-dom';



const Main = () => (
    <Switch>
    <Route exact path ="/" component={Container} />
    <Route path="/login" exact component={Container} />
</Switch>
)
  



export default Main;