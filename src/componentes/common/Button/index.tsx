import { ReactNode } from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

type Size = 'small' | 'medium' | 'large';

interface Props {
    children: ReactNode;
    type: string;
    size: Size;
    onClick(): void;
}

export default function ButtonComponent({ children, type, size, onClick }: Props) {
    const classes = useStyles();
    return (
        <Button
            className={clsx({
                [classes.primary]: type === 'primary',
                [classes.secondary]: type === 'secondary'
            })}
            size={size}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}