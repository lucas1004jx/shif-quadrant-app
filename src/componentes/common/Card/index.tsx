import { FC } from 'react';
import MaterialCard from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Button } from 'src/componentes/common';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

interface Image {
  src: string;
  alt: string
}

type Props = {
  image: Image;
  title: string;
  descriptions: string[];
  withAction?: boolean;
  primaryButton?: string;
  primaryAction?(): void;
  secondaryButton?: string;
  secondaryAction?(): void
};

const Card: FC<Props> = ({
  image,
  title,
  descriptions,
  withAction,
  primaryButton,
  primaryAction,
  secondaryButton,
  secondaryAction,
}: Props) => {
  const classes = useStyles();
  const { src, alt } = image;

  const renderContent = () => (
    <>
      <CardMedia
        component="img"
        alt={alt}
        height="140"
        image={src}
        title={alt}
      />
      <CardContent>

        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        {descriptions.map((content, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <Typography variant="body2" color="textSecondary" component="p" key={idx}>
            {content}
          </Typography>
        ))}
      </CardContent>
    </>
  );

  return (
    <MaterialCard className={classes.card}>
      {
        withAction
          ? (
            <CardActionArea>
              {renderContent()}
            </CardActionArea>
          )
          : renderContent()
      }
      <CardActions classes={{
        root: classes.buttons,
      }}
      >
        {primaryButton && (
          <Button size="small" type="primary" onClick={primaryAction}>
            {primaryButton}
          </Button>
        )}
        {secondaryButton && (
          <Button size="small" type="secondary" onClick={secondaryAction}>
            {secondaryButton}
          </Button>
        )}
      </CardActions>
    </MaterialCard>
  );
};

Card.defaultProps = {
  withAction: false,
  primaryButton: 'primaryButtonText',
  primaryAction: () => { },
  secondaryButton: 'secondaryButtonText',
  secondaryAction: () => { },
};

export default Card;
