import { FC } from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

type Size = 'small' | 'medium' | 'large';

type Props = {
  label: string;
  type: string;
  size: Size;
  onClick(): void;
};

export default (({
  label, type, size, onClick, ...rest
}: Props) => {
  const classes = useStyles();

  return (
    <Button
      className={clsx({
        [classes.primary]: type === 'primary',
        [classes.secondary]: type === 'secondary',
      })}
      size={size}
      onClick={onClick}
      {...rest}
    >
      {label}
    </Button>
  );
}) as FC<Props>;
