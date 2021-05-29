import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';
import Doge from '../../modules/course/assets/doge.png';
import Uniswap from './assets/uniswap.png';
import axios from 'axios';
import RenderIf from 'common/components/RenderIf/RenderIf';
import Spacer from 'common/components/spacer/Spacer';
import './Home.scss';

const course1 = {
  title: 'What are NFTs',
  description: 'Learn about NFTs by making a real NFT Doge!',
  to: '/doge',
  time: '10',
  image: Doge,
};

const course2 = {
  title: 'Intro to Defi',
  description: 'Build your own DEX through this interactive game',
  to: '/',
  time: '20',
  image: Uniswap,
};

const poapApiUrl = 'http://api.poap.xyz/actions/scan/';
const myAddress = '0xF22727DFe1E1465d5846246899f5D411ff3965fC';

const CourseCard = (props) => {
  const { title, description, to, time, image } = props.course;

  return (
    <div className="course-card">
      <Link to={to}>
        <div className="image-container">
          <img src={image} className="card-hero" />
        </div>
        <div className="header2">{title}</div>
        <br />
        <div className="body2">{description}</div>
        <br />
        <div className="caption">Time: {time} min</div>
      </Link>
    </div>
  );
};

const Home = () => {
  const [badges, setBadges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onMount = async () => {
      setLoading(true);
      const badges = await axios.get(`${poapApiUrl}${myAddress}`);
      setLoading(false);
      setBadges(badges.data);
      console.log(badges);
    };

    onMount();
  }, []);
  return (
    <div className="page-container">
      <div className="header2">My course badges </div>
      <Spacer size="medium" />
      <RenderIf value={loading}>
        <div className="caption">Loading badges ...</div>
      </RenderIf>
      {badges.map((badge, idx) => (
        <React.Fragment key={idx}>
          <a data-tip data-for="happyFace">
            <img src={badge.event.image_url} className="badge" key={idx} />
          </a>
          <ReactTooltip id="happyFace" type="dark" place="right">
            <div className="tooltip-container">
              <span>{badge.event.name}</span>
            </div>
          </ReactTooltip>
        </React.Fragment>
      ))}
      <Spacer size="large" />
      <div className="header2">Courses</div>
      <Spacer size="medium" />
      <div className="home-container">
        <CourseCard course={course1} />
        <CourseCard course={course2} />
      </div>
    </div>
  );
};

export default Home;
