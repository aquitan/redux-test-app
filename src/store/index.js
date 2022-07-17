import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { cashReducer } from './cashReducer'
import { customersReducer } from './customerReducer'

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customersReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))