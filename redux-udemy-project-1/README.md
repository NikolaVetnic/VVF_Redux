# Redux Udemy Project I : Using Redux Only

Create `app/store/index.js` which will hold the store:

```
    const counterReducer = (state = { counter: 0 }, action) => { ... }
    const store = createStore(counterReducer);

    export default store;
```

Wrap the `<App />` component with the `<Provider>` component provided by `react-redux`:

```
    <Provider store={store}><App /></Provider>
```

Within the component (`Counter` in this case) we gain access to data managed by Redux, ie. we obtain a slice of the state needed for the component in question:

```
    import { useSelector } from "react-redux";
    ...
    const counter = useSelector((state) => state.counter);
```

Dispatching of actions from within the component:

```
    import { useDispatch } from "react-redux";
    ...
    const dispatch = useDispatch(); // can be called to dispatch actions
    const incrementHandler = () => {
        dispatch({ type: "increment" });
    };
    const decrementHandler = () => {
        dispatch({ type: "decrement" });
    };
```

Using Redux with class-based components:

```
    import { Component } from "react";
    import { connect } from "react-redux";

    class Counter extends Component {
        incrementHandler() {
            this.props.increment();
        }

        decrementHandler() {
            this.props.decrement();
        }

        toggleCounterHandler() {
            this.props.toggleCounterHandler();
        }

        render() {
            return (
                <main className={classes.counter}>
                    <h1>Redux Counter</h1>
                    <div className={classes.value}>{this.props.counter}</div>
                    <div>
                        <button onClick={this.decrementHandler.bind(this)}>
                            Decrement
                        </button>
                        <button onClick={this.incrementHandler.bind(this)}>
                            Increment
                        </button>
                    </div>
                    <button onClick={this.toggleCounterHandler}>
                        Toggle Counter
                    </button>
                </main>
            );
        }
    }

    // maps redux state to props
    const mapStateToProps = (state) => {
        return {
            counter: state.counter,
        };
    };

    // store dispatch functions in props
    const mapDispatchToProps = (dispatch) => {
        return {
            increment: () => dispatch({ type: "increment" }),
            decrement: () => dispatch({ type: "decrement" }),
        };
    };

    // connect() is called which returns a function, and then the returned function is called with Counter parameter
    export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```
