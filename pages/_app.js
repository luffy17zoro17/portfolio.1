import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import SideNav from '../components/SideNav';


function MyApp({ Component, pageProps }) {
  return (<div className="response">
            <div>
             <div><SideNav/></div> 
             <Component {...pageProps} />
             </div>
          </div>);
}

export default MyApp
