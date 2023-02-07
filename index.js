function createStore(reducer) {
	let state = {
		count: 0,
	};

	let listeners = [];

	return {
		getState() {
			return state;
		},
		dispatch(action) {
			state = reducer(state, action);


		},
		subscribe(listener) {
			listeners.push(listener);
		}
	};
}


// { type: 'INCREMENT' }
// { type: 'ADD', payload: 42 }
const reducer = (state, action) => {
	switch (action.type) {
		case 'INCREMENT': // can be enum or anything
			return {
				...state,
				count: state.count + 1,
			};
		case 'DECREMENT': // can be enum or anything
			return {
				...state,
				count: state.count - 1,
			};
		case 'ADD': // can be enum or anything
			return {
				...state,
				count: state.count + action.payload,
			};
		default:
			return state;
	}
};

const store = createStore(reducer);

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});

const increment = () => ({ type: 'INCREMENT' });
const addToCount = (value) => ({ type: 'ADD', payload: value});


store.dispatch(increment());
store.dispatch(addToCount(42));
