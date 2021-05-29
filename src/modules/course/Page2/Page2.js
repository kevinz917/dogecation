import React from 'react';
import Input from 'common/components/Input/Input';
import Nav from '../Nav/Nav';
import Spacer from 'common/components/spacer/Spacer';
import Doge from '../assets/doge.png';
import NFTDataDisplay from '../NFTDataDisplay/NFTDataDisplay';
import courseActions from '../redux/courseActionCreator';
import './page2.scss';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    nft: state.course.nft,
  };
};

const mapDispatchToProps = {
  nftDataChanged: (field, value) => courseActions.setNFTField(field, value),
};

const Page2 = (props) => {
  const { nft, nftDataChanged } = props;

  return (
    <React.Fragment>
      <div className="left-container">
        <div className="header1">Build your own NFT</div>
        <div className="body2">NFTs are described by data. Here, we will be customizing our NFT</div>
        <Spacer size="xxlarge" />

        <div className="body2">First, give your NFT a name</div>
        <Input
          onChange={(e) => nftDataChanged('name', e.target.value)}
          value={nft.name}
          placeholder="Enter Doge name"
        />

        <Spacer size="large" />

        <div className="body2">Give your Doge a description</div>

        <Input
          onChange={(e) => nftDataChanged('description', e.target.value)}
          value={nft.description}
          placeholder="Enter Doge name"
        />

        <Spacer size="xxlarge" />

        <div className="header2">Where is the data for your NFT stored?</div>
        <br />
        <div className="body2">
          The data that describes your unique Doge lives on IPFS, a decentralized storage. You can think of it like a
          dropbox but always accessible and available to everyone!
        </div>

        <Spacer size="xxlarge" />
        <Nav nextStep="Next: Customize Doge" />
      </div>
      <div className="right-container">
        <div className="doge-container">
          <img src={Doge} className="doge-hero" />
        </div>

        <NFTDataDisplay highlight={['name', 'description']} />
      </div>
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Page2);
