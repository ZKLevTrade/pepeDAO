// >> Modules
import { CssBaseline } from '@mui/material';
import { useEffect } from 'react';

// >> Aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// >> Styling
import '../styles/globals.css';
import '../styles/fonts.css';

// >> Script
function MyApp({ Component, pageProps }) {
	useEffect(() => {
		Aos.init({ duration: 700, once: true });

		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	// >> Render
	return (
		<>
			<div>
				<CssBaseline />
				<Component {...pageProps} />
			</div>
		</>
	);
}

export default MyApp;
