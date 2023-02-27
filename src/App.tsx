import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Router } from './router';
import { StyledProvider } from './styles';

export const App = () => {
  return (
    <StyledProvider>
      <ToastContainer />
      <Router />
    </StyledProvider>
  );
};
