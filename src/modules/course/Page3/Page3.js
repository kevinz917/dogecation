import Spacer from 'common/components/spacer/Spacer';
import React from 'react';
import Nav from '../Nav/Nav';

const Page3 = () => {
  return (
    <React.Fragment>
      <div className="left-container">
        <div className="header1">Customize NFT</div>

        <div className="body2">
          NFTs often have characteristics. For an artwork, it could be the image file and its size. For the NFT Doge,
          we&apos;ll be letting you pick a hat!
          <br />
          <br />A random number generator will be used to determine what hat you get, and this is how NFT attributes are
          implemented in games!
        </div>

        <Spacer size="xxlarge" />
        <Nav />
      </div>

      <div className="right-container">asdf</div>
    </React.Fragment>
  );
};

export default Page3;
