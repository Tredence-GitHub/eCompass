import { combineReducers } from "redux";
import { persistStore } from 'redux-persist';


const initialState = {
    content1: 'All',
    content2: 'Every',
    filter1: '',
    filter2: ''
};


const reducer = (state = initialState, action) => {

// const newState = {
//         content1: '',
//         content2: ''
//     }
 if(action.type === 'UPDATE_FILTERS'){
     state.filter1 = action.info;
     state.filter2 = action.info2; 
 }
 return { state }
}

const reducers = combineReducers({
    regular: reducer
})

export default reducers;