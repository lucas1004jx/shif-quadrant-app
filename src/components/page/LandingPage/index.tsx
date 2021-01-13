import { Card } from '@common';
import useStyles from './styles';

const cardTitle = 'Mi Cuadrante';
const cardDescriptions = ['Apunta tu hora de entrada y salida, turnos, rutas….', 'Visualiza tus horas de trabajo.'];
const image = {
  src: '/images/schedule.png',
  alt: 'schedule',
};

const LandingPage = () => {
  const classes = useStyles();
  const handleLogin = () => {
    console.log('login');
  };
  return (
    <div className={classes.landingPage}>
      <Card
        image={image}
        title={cardTitle}
        descriptions={cardDescriptions}
        primaryButton="login"
        primaryAction={handleLogin}
      />
    </div>
  );
};

export default LandingPage;
