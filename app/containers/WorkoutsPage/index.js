/**
 *
 * WorkoutsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectWorkoutsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import WorkoutCard from '../../components/WorkoutCard';
import trackWorkoutImage from '../../images/track-workout.jpg';
import { Input, Segment } from 'semantic-ui-react';

export function WorkoutsPage() {
  useInjectReducer({ key: 'workoutsPage', reducer });
  useInjectSaga({ key: 'workoutsPage', saga });

  const renderWorkoutCards = () => {
    const workoutCards = [];

    // Create 10 workout cards
    for (let i = 0; i < 10; i++) {
      workoutCards.push(<WorkoutCard key={i} image={trackWorkoutImage} title={"Deadlift"} description={"Lorem Ipsum."} />);
    }

    return workoutCards;
  };

  return (
    <div className='mx-5 my-5'>
      <div className='d-flex justify-content-end mb-3'>
        <Input label="Search Workouts" labelPosition='right' className='w-25' />
      </div>
      <div>
        <Segment style={{ overflow: 'auto', maxHeight: "80vh" }}>
          {renderWorkoutCards()}
        </Segment>
      </div>
    </div>
  );

};

WorkoutsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  workoutsPage: makeSelectWorkoutsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(WorkoutsPage);
