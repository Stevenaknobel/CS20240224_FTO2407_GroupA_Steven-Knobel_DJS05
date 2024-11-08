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
    switch (action.type) {
      case 'ADD':
        this.state.count += 1;
        break;
      case 'SUBTRACT':
        this.state.count -= 1;
        break;
      case 'RESET':
        this.state.count = 0;
        break;
      default:
        break;
    }
    // Notify listeners after state change
    this.notifySubscribers();
  }
  //Subscribe to the state changes
  subscribe(listener) {
    // Add new listener to subscribers list
    this.listeners.push(listener);
  }
}