import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            main: '#fbc02d'
        },
        secondary: {
            main: '#424242'
        }
    },
});

export default theme;