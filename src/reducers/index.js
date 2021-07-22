import { combineReducers } from 'redux';
import movies from './movie_reducers';

const rootReducer = combineReducers({
    movies
})

export default rootReducer;