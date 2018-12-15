import { SheetsRegistry } from 'jss';
import { createGenerateClassName } from '@material-ui/core/styles';
import theme from '../theme';

const createPageContext = () => ({
  theme,
  sheetsManager: new Map(),
  sheetsRegistry: new SheetsRegistry(),
  generateClassName: createGenerateClassName(),
});

export default () => {
  if (!process.browser) {
    return createPageContext();
  }

  if (!window.__GLOBAL_MUI__) {
    window.__GLOBAL_MUI__ = createPageContext();
  }

  return window.__GLOBAL_MUI__;
};
