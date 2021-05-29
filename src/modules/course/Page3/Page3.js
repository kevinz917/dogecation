import { connect } from 'react-redux';
import Button from 'common/components/button/Button';
import Input from 'common/components/Input/Input';
import Spacer from 'common/components/spacer/Spacer';
import React from 'react';
import Nav from '../Nav/Nav';
import NFTDataDisplay from '../NFTDataDisplay/NFTDataDisplay';
import courseActions from '../redux/courseActionCreator';
import Doge from '../assets/doge.png';
import Redhat from '../assets/redhat.png';
import Orangehat from '../assets/orangehat.png';
import './Page3.scss';
import RenderIf from 'common/components/RenderIf/RenderIf';

const mapStateToProps = (state) => {
  return {
    nft: state.course.nft,
  };
};

const mapDispatchToProps = {
  generateDNA: () => courseActions.setDNA(),
};

const Page3 = (props) => {
  const { nft, generateDNA } = props;

  return (
    <React.Fragment>
      <div className="left-container">
        <div className="header1">Customize NFT</div>
        <br />

        <div className="body2">
          NFTs often have characteristics. For an artwork, it could be the image file and its size. For the NFT Doge,
          we&apos;ll be letting you pick a hat!
          <br />
          <br />A random number generator will be used to determine what hat you get, and this is how NFT attributes are
          implemented in games!
        </div>

        <Spacer size="large" />

        <div className="dna-generator-container">
          <Input value={nft.dna} />
          <Button onClick={() => generateDNA()}>Generate DNA</Button>
        </div>

        <Spacer size="large" />

        <div className="header2">How are the hats determined?</div>
        <br />
        <div className="body2">
          In this example, we will be using the last digit to determine the hat color. This is how a few other NFT games
          implement randomization as well.
        </div>

        <Spacer size="xxlarge" />
        <Nav />
      </div>

      <div className="right-container">
        <Spacer size="xxlarge" />
        <div className="doge-container">
          <RenderIf value={Number(nft.dna % 2) == 0}>
            <img src={Redhat} className="redhat" />
          </RenderIf>

          <RenderIf value={Number(nft.dna % 2) !== 0}>
            <img src={Orangehat} className="redhat" />
          </RenderIf>

          <img src={Doge} className="doge-hero" />
        </div>
        <NFTDataDisplay highlight={['dna']} />
      </div>
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Page3);
