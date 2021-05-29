import Spacer from 'common/components/spacer/Spacer';
import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import Doge from '../assets/doge.png';
import Redhat from '../assets/redhat.png';
import Orangehat from '../assets/orangehat.png';
import { JSONDisplay } from '../NFTDataDisplay/NFTDataDisplay';

import './Page4.scss';
import Button from 'common/components/button/Button';
import RenderIf from 'common/components/RenderIf/RenderIf';

const parent1Data = {
  id: 2,
  name: 'Goofy Doge',
  description: 'Hi ~',
  dna: '2100886528660431',
};

const parent2Data = {
  id: 4,
  name: 'Elon Doge',
  description: 'To the moon!',
  dna: '9182834857205478',
};

const childDogeData = {
  id: 124,
  name: 'Child Doge',
  description: 'To the moon!',
  dna: '56418606929329545',
};

const Page4 = () => {
  const [showChild, setShowChild] = useState(false);

  return (
    <React.Fragment>
      <div className="left-container">
        <div className="header1">Bonus: How does breeding work?</div>
        <br />
        <div className="body2">In NFT games, you can often breed pets and make new ones. </div>
        <Spacer size="xxlarge" />
        <div className="header1">How is the child DNA created?</div>
        <br />
        <div className="body2">
          In this case, the DNA is the average of the DNAs of the parents. This totally depends on the game! Different
          platforms have different ways of creating NFTs.
        </div>

        <Spacer size="xxlarge" />
        <Nav />
      </div>
      <div className="right-container">
        <div className="nft-parents-container">
          <div>
            <img src={Orangehat} className="hat" />
            <img src={Doge} className="parent-doge" />
            <Spacer size="large" />
            <div className="header2">Parent 1</div>
            <JSONDisplay nft={parent1Data} />
          </div>
          <div>
            <img src={Redhat} className="hat" />
            <img src={Doge} className="parent-doge" />
            <Spacer size="large" />
            <div className="header2">Parent 2</div>
            <JSONDisplay nft={parent2Data} />
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div className="child-container">
          <div className="header2">Child Doge</div>
          <RenderIf value={!showChild}>
            <Button onClick={() => setShowChild(true)}>Generate Child</Button>
          </RenderIf>

          <RenderIf value={showChild}>
            <JSONDisplay nft={childDogeData} />
          </RenderIf>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Page4;
