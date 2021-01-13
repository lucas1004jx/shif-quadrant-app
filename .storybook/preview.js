
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}


 export const decorators = [ (story) => {
    return (
     <ThemeProvider theme={theme}>{story()}</ThemeProvider>
    )
}]