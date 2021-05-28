import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    nft: state.course.nft,
  };
};

const NFTDataDisplay = (props) => {
  const { nft } = props;
  return (
    <div className="body2">
      <pre>{JSON.stringify(nft, null, 2)}</pre>
    </div>
  );
};

export default connect(mapStateToProps)(NFTDataDisplay);
