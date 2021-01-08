import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }: Theme) => ({
  primary: {
    color: palette.common.white,
    background: palette.primary.main,
    '&:hover': {
      background: palette.primary.dark,
    },
  },
  secondary: {
    border: `1px solid ${palette.primary.main}`,
  },
}));

export default useStyles;
