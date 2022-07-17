const defaultState = {
    customers: []
}

const ADD_CUSTOMER = 'ADD_CUSTOMER'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'
const LOAD_ALL_CUSTOMERs = 'LOAD_ALL_CUSTOMERs'

export const customersReducer = (state = defaultState, action) => {
    console.log('action', action.payload)
    switch (action.type) {
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}
        case REMOVE_CUSTOMER:
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
        case LOAD_ALL_CUSTOMERs:
            return {...state, customers: [...state.customers, ...action.payload]}
        default:
            return state
    }
}

export const addCustomerAction = (payload) => {
    return {type: ADD_CUSTOMER, payload}
}
export const removeCustomerAction = (payload) => {
    return {type: REMOVE_CUSTOMER, payload}
}
export const loadAllCustomersAction = (payload) => {
    return {type: LOAD_ALL_CUSTOMERs, payload}
}

