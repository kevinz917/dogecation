import './course.scss';
import '../../common/styles/typography.scss';
import { connect } from 'react-redux';
import RenderIf from 'common/components/RenderIf/RenderIf';

const mapStateToProps = (state) => {
  step: state.step;
};

const Course = (props) => {
  const { step } = props;

  return (
    <div className="course-container">
      <div className="left-container">
        <RenderIf value={step == 1}>
          <div className="header1">Welcome to Dogecation!</div>
          <div className="subtitle">Learn more about NFTs</div>
        </RenderIf>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Course);
