import React, { useState } from 'react';
import Input from 'common/components/Input/Input';
import Nav from '../Nav/Nav';
import Spacer from 'common/components/spacer/Spacer';
import Doge from '../assets/doge.png';
import './page2.scss';

const initialNftDatObject = {
  id: 12,
  name: '',
  description: '',
  creationTime: new Date().getTime(),
};

const Page2 = () => {
  const [nftData, setNftData] = useState(initialNftDatObject);

  const nftDataOnChanged = (field, value) => {
    let copy = Object.assign({}, nftData);
    copy[field] = value;
    setNftData(copy);
  };

  return (
    <React.Fragment>
      <div className="left-container">
        <div className="header1">Build your own NFT</div>
        <br />
        <div className="body2">First, give your NFT a name</div>
        <Input
          onChange={(e) => nftDataOnChanged('name', e.target.value)}
          value={nftData.name}
          placeholder="Enter Doge name"
        />

        <Spacer size="large" />

        <div className="body2">Give your Doge a description</div>

        <Input
          onChange={(e) => nftDataOnChanged('description', e.target.value)}
          value={nftData.description}
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
        <Nav />
      </div>
      <div className="right-container">
        <div className="doge-container">
          <img src={Doge} className="doge-hero" />
        </div>

        <hr />
        <div>
          <div className="header1">Your NFT Doge data</div>
          <div className="body2">This data will be stored on IPFS</div>
          <br />
          <div className="body2">
            <pre>{JSON.stringify(nftData, null, 2)}</pre>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Page2;
