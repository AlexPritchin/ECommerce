import { useNavigate, useRouteError } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './error-page.scss';
import { MainButton } from './components/buttons/MainButton';
import { BreadcrumbsView } from './components/BreadcrumbsView';

export default function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string };
  console.error(error);

  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <main className='error-main-container'>
        <BreadcrumbsView
          links={[
            {
              href: '/',
              title: 'Home',
            },
          ]}
          typographyTitle='404 Error'
        />
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
