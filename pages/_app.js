
import 'tailwindcss/tailwind.css';
import SideNav from '../components/SideNav';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import ResumeComp from '../components/ResumeComp';


function MyApp({ Component, pageProps }) {

  return (
  
    <Provider store={store}>     
        <div>
             <div><SideNav/><ResumeComp/></div> 
             <Component {...pageProps} />
        </div>
    </Provider> 
    );
}

export default MyApp
