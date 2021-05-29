import React from 'react';
import Spacer from 'common/components/spacer/Spacer';
import Nav from '../Nav/Nav';

import Pak from './assets/pak.jpeg';
import Axie from './assets/axie.png';
import Punk from './assets/punk.png';
import './welcomePage.scss';

const WelcomePage = () => {
  return (
    <React.Fragment>
      <div className="left-container">
        <div className="header1">Welcome to Dogecation!</div>
        <br />
        <div className="body2">Learn more about NFTs through an interactive experience</div>

        <Spacer size="xxlarge" />

        <div className="header1">What are NFTs?</div>
        <br />
        <div className="body2">
          You can think of NFTs like a unique barcode you would find on a a food item. NFTs are kinda like the barcode
          for digital stuff, like a sword in a game, or a piece of digital art. Check out a few examples of NFTs on the
          right side!
          <Spacer size="xxlarge" />
        </div>

        <div className="header1">How does it work?</div>
        <br />
        <div className="body2">
          NFTs live on the ethereum blockchain and are created through smart contracts. You can think about Smart
          Contracts like pieces of code that are always running on the internet.
        </div>

        <br />
        <Nav />
      </div>

      <div className="right-container">
        <img src={Pak} className="nft-pak" />
        <img src={Axie} className="nft-axie" />
        <img src={Punk} className="nft-punk" />
      </div>
    </React.Fragment>
  );
};

export default WelcomePage;
