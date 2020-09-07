import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Login } from './views/login';
import { ChatRoom } from './views/chat-room';
import { NotFound } from './views/not-found';

function App() {
  return (
    <BrowserRouter>
      <div >
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/chat" component={ChatRoom}></Route>
          <Route default component={NotFound}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
