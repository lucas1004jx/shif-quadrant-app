import { FC, ReactNode } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'src/theme';
import useStyles from './styles';

type Props = {
  children: ReactNode
};

const Layout: FC<Props> = ({ children }: Props) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.appContainer}>
        <CssBaseline />
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
