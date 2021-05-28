import './course.scss';
import '../../common/styles/typography.scss';
import { connect } from 'react-redux';
import RenderIf from 'common/components/RenderIf/RenderIf';
import WelcomePage from './welcomePage/WelcomePage';
import Page2 from './Page2/Page2';

const mapStateToProps = (state) => {
  return {
    step: state.course.step,
  };
};

const Course = (props) => {
  const { step } = props;

  return (
    <div className="course-container">
      <RenderIf value={step == 1}>
        <WelcomePage />
      </RenderIf>

      <RenderIf value={step == 2}>
        <Page2 />
      </RenderIf>
    </div>
  );
};

export default connect(mapStateToProps)(Course);
