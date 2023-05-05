// >> Modules
import getVariable from '../../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Buttons
import roadmap1 from '../../../public/roadmap1.png';
import roadmap2 from '../../../public/roadmap2.png';
import roadmap3 from '../../../public/roadmap3.png';
import roadmap4 from '../../../public/roadmap4.png';

// >> Styling
const useStyles = makeStyles({
	outsideDiv: {
		width: '100%',
		position: 'relative',
		'z-index': '4',
	},

	insideDiv: {
		width: '90%',
		maxWidth: '1350px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '90px',
	},

	h2: {
		position: 'relative',

		fontFamily: 'Milk Kids',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '24px',
		lineHeight: '100%',
		textTransform: 'uppercase',

		color: '#73CD64',
	},

	h1: {
		position: 'relative',
		marginTop: '18px',

		fontFamily: 'Alphakind',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '54px',
		lineHeight: '110%',
		textTransform: 'uppercase',

		color: '#3C8430',
	},

	h3: {
		position: 'relative',
		marginTop: '18px',

		fontFamily: 'Milk Kids',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '18px',
		lineHeight: '140%',
		maxWidth: '720px',

		color: '#4A4A4A',
	},

	phases: {
		position: 'relative',
		width: '100%',
		marginTop: '60px',

		display: 'flex',
		flexWrap: 'wrap',
		gap: '13px',
	},

	phase: {
		position: 'relative',
		flex: '49%',
		height: '396px',
		opacity: '.65',
		transition: 'opacity .5s',

		'&:hover': {
			cursor: 'pointer',
			opacity: '1',
		},
	},

	phase1: {
		background: `url(${roadmap1.src})`,
		backgroundSize: '100% 100%',
	},

	phase2: {
		background: `url(${roadmap2.src})`,
		backgroundSize: '100% 100%',
	},

	phase3: {
		background: `url(${roadmap3.src})`,
		backgroundSize: '100% 100%',
	},

	phase4: {
		background: `url(${roadmap4.src})`,
		backgroundSize: '100% 100%',
	},

	// >>>>>>>>>>>>>> Mobile
	// 1300px
	['@media (max-width: 1300px)']: {
		phase: {
			height: '300px',
		},
	},

	// 850px
	['@media (max-width: 850px)']: {
		phase: {
			flex: '45%',
			height: '220px',
		},
	},

	// 700px
	['@media (max-width: 700px)']: {
		phase: {
			flex: '45%',
			height: '170px',
		},

		phases: {
			marginTop: '30px',
			gap: '4px',
		},

		h2: {
			fontSize: '14px',
		},

		h1: {
			fontSize: '24px',
		},

		h3: {
			marginTop: '12px',
		},
	},

	// 500px
	['@media (max-width: 500px)']: {
		phase: {
			flex: '45%',
			height: '130px',
		},
	},
});

export default useStyles;
