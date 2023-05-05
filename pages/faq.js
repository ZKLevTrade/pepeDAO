// >> Styles
import useGlobalStyles from '../components/globalStyle';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// >> Pages
import Faq from '@/components/faq/faq';

// >> Script
export default function Home() {
	// >> Router
	const router = useRouter();

	// >> Style
	const styles = useGlobalStyles();

	// >> Variables
	const [tabState, setTabState] = useState('hide');

	useEffect(() => {
		setTabState('show');
	}, []);

	const changeTab = (tab) => {
		if (router.pathname === `/${tab}`) {
		} else {
			console.log(router);
			setTabState('hide');

			setTimeout(function () {
				router.push(`../${tab}`);
			}, 700);
		}
	};

	// >> Render
	return (
		<div className={styles.container}>
			<div
				className={styles.onePage}
				style={
					tabState === 'show'
						? { left: '0px', opacity: '1' }
						: { left: '-100%', opacity: '0' }
				}
			>
				<Faq changeTab={changeTab} />
			</div>
		</div>
	);
}
