// >> Modules
import Head from 'next/head';
import getVariable from '../globalVariables';

// >> Styles
import useStyles from './homePageStyle';
import useGlobalStyles from '../globalStyle';

// >> Components
import NavBar from '../navBar/navBar';
import HomeImg from './homeImg/homeImg';

// >> Script
function HomePage(props) {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<>
			<Head>
				<title>{getVariable['texts']['pageTitle']}</title>
				<meta charSet="utf-8" />
				<meta
					name="theme-color"
					content={getVariable['colors']['pageMainColor']}
				/>
				<meta
					name="description"
					content={getVariable['texts']['pageDesc']}
				/>

				<meta
					property="og:url"
					content={`https://${getVariable['texts']['pageLink']}/`}
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content={getVariable['texts']['pageTitle']}
				/>
				<meta
					property="og:description"
					content={getVariable['texts']['pageDesc']}
				/>
				<meta
					property="og:image"
					content={getVariable['texts']['pageImage']}
				/>

				<meta name="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:domain"
					content={getVariable['texts']['pageLink']}
				/>
				<meta
					property="twitter:url"
					content={`https://${getVariable['texts']['pageLink']}/`}
				/>
				<meta
					name="twitter:title"
					content={getVariable['texts']['pageTitle']}
				/>
				<meta
					name="twitter:description"
					content={getVariable['texts']['pageDesc']}
				/>
				<meta
					name="twitter:image"
					content={getVariable['texts']['pageImage']}
				/>
			</Head>
			<div className={styles.mainDiv}>
				<NavBar changeTab={props.changeTab} light={false} />
				<HomeImg changeTab={props.changeTab} />
			</div>
		</>
	);
}

export default HomePage;
