/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Container, Grid, Header, Icon, Image } from 'semantic-ui-react';
import FeatureCard from '../../components/FeatureCard';
import trackWorkoutImage from '../../images/track-workout.jpg';
import trackNutritionImage from '../../images/track-nutrition.jpg';
import trackProgressImage from '../../images/track-progress.jpg';


export function HomePage({
  history,
}) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  const navigate = (path) => {
    history.push(path);
  };

  return (

    <div>
      <Container fluid>
        <Grid className='w-100'>
          <Grid.Row>
            <Grid.Column>
              <h1 className='text-center mt-5 font-weight-light'>Welcome to Bodybuilding for Dummies</h1>
              <h4 className='text-center mb-5 text-secondary'>Your one-stop solution for workout and diet tracking.</h4>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className='mx-5 justify-content-center text-center'>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <FeatureCard image={trackWorkoutImage} title={"Track Your Workouts"} description={"Log your workout sessions."} onClick={() => navigate("/workouts")}/>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <FeatureCard image={trackNutritionImage} title={"Track Your Nutrition"} description={"Log your daily diet."} onClick={() => navigate("/nutrition")}/>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <FeatureCard image={trackProgressImage} title={"Track Your Progress"} description={"Visualize your progress in a chart."} onClick={() => navigate("/progress")}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>

  );

};

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
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

export default compose(withConnect)(HomePage);
