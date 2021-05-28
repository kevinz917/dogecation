import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    nft: state.course.nft,
  };
};

const NFTDataDisplay = (props) => {
  const { nft } = props;
  return (
    <div>
      <hr />
      <div className="header1">Your NFT Doge data</div>
      <div className="body2">This data will be stored on IPFS</div>
      <br />
      <div className="body2">
        <pre>{JSON.stringify(nft, null, 2)}</pre>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(NFTDataDisplay);
