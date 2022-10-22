import '../styles/globals.css';
import 'tailwindcss/tailwind.css';


function MyApp({ Component, pageProps }) {
  return (<div className="response">
            <div>
             <Component {...pageProps} />
             </div>
          </div>);
}

export default MyApp
