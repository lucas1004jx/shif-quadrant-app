import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({spacing}:Theme) =>({
    appContainer:{
        padding:spacing(2)
    }
}))

export default useStyles;