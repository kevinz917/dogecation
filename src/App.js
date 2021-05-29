import { Router, Route, Switch } from 'react-router-dom';
import PageLoadingBar from './common/components/PageLoadingBar/PageLoadingBar';
import Test from './modules/test/test';
import Course from './modules/course/course';

import './common/styles/colors.scss';
import './common/styles/typography.scss';
import './common/styles/overall.scss';
import './common/styles/animation.scss';
import './App.scss';

import history from './common/components/Router/history';
import Navbar from 'components/Navbar/Navbar';

const App = () => {
  return (
    <div className="overall-page-container">
      <PageLoadingBar />

      <Router history={history}>
        <div className="main-wrapper">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Course} />
            <Route exact path="/test" component={Test} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
