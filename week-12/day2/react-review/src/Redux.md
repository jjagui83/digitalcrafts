# Redux Flow
// Action is dispatched
// Middleware intercepts the action (this is perfect for api calls)
// After middleware is done with it, the action matches a reducer
// Reducers will then update state
// The store will then send the updated state
// This will cause a rerender