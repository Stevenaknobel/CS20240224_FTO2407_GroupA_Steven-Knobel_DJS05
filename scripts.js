//Create a class for the store with a constructor

class Store {
    constructor() {
      this.state = { count: 0 };
    // Array of subscriber functions
      this.listeners = [];
    }

      // Get the current state
  getState() {
    return this.state;
  }
  // Dispatch action to modify the state for adding, subtracting and reseting
  dispatch(action) {

    //make a copy of the current state
    let newState = { ...this.state };
    switch (action.type) {
      case 'ADD':
        newState.count += 1;
        break;
      case 'SUBTRACT':
        newState.count -= 1;
        break;
      case 'RESET':
        newState.count = 0;
        break;
      default:
        break;
    }

    //update the state with the new state
    this.state = newState;

    // Notify listeners after state change
    this.notifySubscribers();
  }

  //Subscribe to the state changes
  subscribe(listener) {
    // Add new listener to subscribers list
    this.listeners.push(listener);
  }

  //notify all subscribers (the listeners) about the different state changes
  notifySubscribers() {
    this.listeners.forEach(listener => listener(this.state));
  }
}

//create functions to create the actions for adding, subtracting and reseting
const addAction = () => ({ type: 'ADD' });
const subtractAction = () => ({ type: 'SUBTRACT' });
const resetAction = () => ({ type: 'RESET' });

const store = new Store();

// Subscribe to state changes and log the new state to the console
store.subscribe(state => {
  console.log('State updated:', state);
});
//Scenario 1
console.log('Initial State:', store.getState());
//Scenario 2
store.dispatch(addAction());
store.dispatch(addAction());
//Scenario 3
store.dispatch(subtractAction());
//Scenario 1
store.dispatch(resetAction());