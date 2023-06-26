import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the workoutsPage state domain
 */

const selectWorkoutsPageDomain = state => state.workoutsPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by WorkoutsPage
 */

const makeSelectWorkoutsPage = () =>
  createSelector(
    selectWorkoutsPageDomain,
    substate => substate,
  );

export default makeSelectWorkoutsPage;
export { selectWorkoutsPageDomain };
