import { connect } from 'react-redux';
import './NFTDataDisplay.scss';

const mapStateToProps = (state) => {
  return {
    nft: state.course.nft,
  };
};

const NFTDataDisplay = (props) => {
  const { nft, highlight } = props;

  return (
    <div>
      <hr />
      <div className="header1">Your NFT Doge data</div>
      <div className="body2">This data will be stored on IPFS</div>
      <br />
      <div className="body2">
        <div>{'{'}</div>
        {Object.keys(nft).map((key, idx) => (
          <div
            className={`body2 key-object-line-container ${
              highlight && highlight.includes(key) ? 'highlight' : 'no-highlight'
            }`}
            key={`${key} ${idx} }`}
          >
            {key} : {nft[key]}
          </div>
        ))}
        <div>{'}'}</div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(NFTDataDisplay);
