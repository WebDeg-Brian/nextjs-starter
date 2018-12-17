export default (reducer, name, actionPayload) => {
  test(name, () => {
    expect(reducer(undefined, actionPayload)).toMatchSnapshot();
  });
};
