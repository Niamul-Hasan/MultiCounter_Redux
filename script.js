// get dom elements 
const counterElement = document.getElementById('counter');
const incrementElement = document.getElementById('increment');
const decrementElement = document.getElementById('decrement');
const resetElement = document.getElementById('reset');

// initial value 

const initialState = {
    value: 0,
}

// reducer function 

function createReducer(state = initialState, action) {
    if (action.type === 'increment') {
        return {
            ...state,
            value: state.value + 1,
        }
    }
    else if (action.type === 'decrement') {
        return {
            ...state,
            value: state.value - 1,
        }
    }
    else if (action.type === 'reset') {
        return {
            ...state,
            value: state.value * 0,
        }
    }
    else {
        return state;
    }
}

// create store 

const store = Redux.createStore(createReducer);

const render = () => {
    const state = store.getState();
    counterElement.innerText = state.value.toString();
}
store.subscribe(render);

// button event listener 

incrementElement.addEventListener('click', () => {
    store.dispatch({
        type: 'increment',
    })
})

decrementElement.addEventListener('click', () => {
    store.dispatch({
        type: 'decrement',
    })
})

resetElement.addEventListener('click', () => {
    store.dispatch({
        type: 'reset',
    })
})