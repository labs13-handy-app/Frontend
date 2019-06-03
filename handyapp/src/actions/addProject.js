import {
  ADD_PROJECT_START,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILURE
} from '../actions';

export const addProject = project => dispatch => {
  console.log(project);
  dispatch({type: ADD_PROJECT_START});

  fetch('http://localhost:3000/projects', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(project)
  })
    .then(res => dispatch({type: ADD_PROJECT_SUCCESS, payload: res.body}))
    .catch(err => dispatch({type: ADD_PROJECT_FAILURE, payload: err.message}));
};
