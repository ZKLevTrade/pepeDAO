// >> Modules
import Head from 'next/head';
import getVariable from '../globalVariables';
import Image from 'next/image';
import { useState } from 'react';

// >> Styles
import useStyles from './roadmapStyle';
import useGlobalStyles from '../globalStyle';

// >> Components
import NavBar from '../navBar/navBar';
import Points from './points/points';
import Footer from '../footer/footer';
import PhaseInfo from './phaseInfo/phaseInfo';

// >> Script
function Roadmap(props) {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Variables
	const [phase, setPhase] = useState('Phase 1');

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
				<Points setPhase={setPhase} />
				<PhaseInfo phase={phase} />
				<Footer />
			</div>
		</>
	);
}

export default Roadmap;
