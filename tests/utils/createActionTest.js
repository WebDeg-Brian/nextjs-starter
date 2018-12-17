export default (store, name, actionName, actionArgs) => {
  test(name, () => {
    store.dispatch(actionName(...actionArgs));
    expect(store.getActions()).toMatchSnapshot();
  });
};
