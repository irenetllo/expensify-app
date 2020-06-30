import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1} = {}) => ({
    type : 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type : 'DECREMENT',
    decrementBy
});

const setCount = ({ setCount = 0} = {}) => ({
    type : 'SET',
    setCount
});

const resetCount = () => ({
    type : 'RESET'
});

// Reducers

// 1. Reucer are pure funtions output -> input
// 2. Never change state or action

const countReducer = (state = { count : 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count : state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count : state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count : 0
            };
        case 'SET': 
            return {
                count : action.setCount
            };
        default : 
            return state;
    }
}

const store = createStore(countReducer);

const unsubcribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy : 5 }))
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy : 10 }));

store.dispatch(setCount()); 
store.dispatch(setCount({setCount : 101 }));
store.dispatch(resetCount()); 