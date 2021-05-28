import Button from 'common/components/button/Button';
import RenderIf from 'common/components/RenderIf/RenderIf';
import courseActions from '../redux/courseActionCreator';
import { connect } from 'react-redux';
import './Nav.scss';

const mapStateToProps = (state) => {
  return {
    step: state.course.step,
  };
};

const mapDispatchToProps = {
  setStep: (nextStep) => courseActions.setStep(nextStep),
};

const Nav = (props) => {
  const { step, setStep } = props;

  return (
    <div className="nav-container">
      <Button onClick={() => setStep(step + 1)}>Next</Button>

      <RenderIf value={step !== 1}>
        <Button onClick={() => setStep(step - 1)}>Back</Button>
      </RenderIf>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
