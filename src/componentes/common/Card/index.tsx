import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from 'src/componentes/common/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

interface Image {
  src: string;
  alt: string
}

interface Props {
  image: Image;
  title: string;
  descriptions: string[];
  withAction?: boolean,
  primaryButton?: string;
  primaryAction?(): void;
  secondaryButton?: string;
  secondaryAction?(): void
}

export default function ImgMediaCard({ image, title, descriptions = [], withAction = false, primaryButton, primaryAction = () => { }, secondaryButton, secondaryAction = () => { } }: Props) {
  const classes = useStyles();
  const { src, alt } = image;

  const renderContent = () => {
    return (
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
          {descriptions.map((content,idx) => <Typography variant="body2" color="textSecondary" component="p" key={idx}>
            {content}
          </Typography>)}
        </CardContent>
      </>
    )
  }

  return (
    <Card className={classes.card}>
      {
        withAction ?
          <CardActionArea>
            {renderContent()}
          </CardActionArea>
          :
          renderContent()
      }
      <CardActions classes={{
        root:classes.buttons
      }}>
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
    </Card>
  );
}