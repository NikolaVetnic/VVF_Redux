# Redux Udemy Project II : Using Redux Toolkit

Alternative to `configureStore()` when there are multiple components, all with its own reducer:

```
    const store = configureStore({ reducer: { counter: counterSlice.reducer } });
```
