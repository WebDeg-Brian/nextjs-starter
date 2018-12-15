export default (stem, Component) =>
  `${stem}(${(process.env.NODE_ENV !== 'production'
    ? typeof Component === 'string' && Component
    : false) ||
    Component.displayName ||
    Component.name ||
    'Component'})`;
