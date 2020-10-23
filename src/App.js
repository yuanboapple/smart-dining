import React from 'react';
import {HashRouter , Route, Switch, Redirect} from 'react-router-dom'
import loadable from './utils/loadable';
const DefaultLayout = loadable(() => import(/* webpackChunkName: 'default' */ './views/layouts')) 
const View404 = loadable(() => import(/* webpackChunkName: '404' */ './views/others/404'))
const View500 = loadable(() => import(/* webpackChunkName: '500' */ './views/others/500'))

const App = () => (
    <HashRouter>
      <Switch>
          <Route path="/" exact  render={() => <Redirect to='/index' />}/>
          <Route path='/500' component={View500} />
          {/* <Route path='/login' component={Login} /> */}
          <Route path='/404' component={View404} />
          <Route path="/" component={DefaultLayout} />
      </Switch>
    </HashRouter>
)

export default App;
