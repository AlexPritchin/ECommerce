import { useNavigate, useRouteError } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './error-page.scss';
import { MainButton } from './components/buttons/MainButton';

const fontStyle = {
  fontFamily: 'Poppins',
  fontWeight: 400,
  fontSize: 14,
};

export default function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string };
  console.error(error);

  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <main className='error-main-container'>
        <Breadcrumbs sx={{ alignSelf: 'flex-start' }}>
          <Link
            underline='hover'
            sx={{
              color: '#808080',
              ...fontStyle,
            }}
            href='/'
          >
            Home
          </Link>
          <Typography
            sx={{
              color: 'black',
              marginTop: '2px',
              ...fontStyle,
            }}
          >
            404 Error
          </Typography>
        </Breadcrumbs>
        <div className='info-text-container'>
          <p className='info-text-title'>404 Not Found</p>
          <p className='info-text-description'>
            Your visited page not found. You may go to home page.
          </p>
        </div>
        <MainButton title='Back to home page' onClick={() => navigate('/')} />
      </main>
      <Footer />
    </div>
  );
}
