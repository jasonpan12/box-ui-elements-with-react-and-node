// Use reducers to factor out action logic from component
const updateTokenAction = 'UPDATE_TOKEN';

const tokenReducer = (state, action) => {
    switch (action.type) {
		case updateTokenAction:
			return {token: action.token}
        default:
            return state
    }
}

export {tokenReducer as default, updateTokenAction};
