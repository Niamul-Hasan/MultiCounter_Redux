// get dom elements 
const counterElement = document.getElementById('counter');
const incrementElement = document.getElementById('increment');
const decrementElement = document.getElementById('decrement');
const resetElement = document.getElementById('reset');
const addElement = document.getElementById('add');




// initial value 

const initialState = {
    value: 0,
    id: 0,
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
    else if (action.type === 'add') {
        // document.body.appendChild(newDiv);
        return {
            ...state,
            id: state.id + 1,
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
    if (state.id) {
        const newDiv = document.createElement('div');
        newDiv.style.width = '100px';
        newDiv.style.height = '100px';
        newDiv.style.marginTop = '10px';

        newDiv.style.background = 'green';
        newDiv.innerText = 'green green green';
        document.body.appendChild(newDiv);
    }
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

addElement.addEventListener('click', () => {
    store.dispatch({
        type: 'add',
    })
})