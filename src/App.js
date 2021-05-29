import { useState, useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PageLoadingBar from './common/components/PageLoadingBar/PageLoadingBar';
import Course from './modules/course/course';
import Home from './modules/home/Home';
import { loadWeb3, loadBlockchainData } from './common/web3/initialize';

import './common/styles/colors.scss';
import './common/styles/typography.scss';
import './common/styles/overall.scss';
import './common/styles/animation.scss';
import './App.scss';

import history from './common/components/Router/history';
import Navbar from 'components/Navbar/Navbar';

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onMount = async () => {
      setLoading(true);
      await loadWeb3();
      await loadBlockchainData();
      setLoading(false);
    };

    onMount();
  }, []);

  return (
    <div className="overall-page-container">
      <PageLoadingBar />

      <Router history={history}>
        <div className="main-wrapper">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/doge" component={Course} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
