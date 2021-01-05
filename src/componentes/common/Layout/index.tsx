
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'src/theme';
import useStyles from './styles';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
        <Container className={classes.appContainer}>
            <CssBaseline />
            {children}
        </Container>
        </ThemeProvider>
    )
}

export default Layout;