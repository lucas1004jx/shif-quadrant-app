import { FC } from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

type Size = 'small' | 'medium' | 'large';

type Props = {
  title: string;
  type: string;
  size: Size;
  onClick(): void;
};

export default (({
  title, type, size, onClick, ...rest
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
      {title}
    </Button>
  );
}) as FC<Props>;
