// >> Modules
import getVariable from '../../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Buttons
import teamBg from '../../../public/teamBg.png';

// >> Styling
const useStyles = makeStyles({
	outsideDiv: {
		width: '100%',
		position: 'relative',
		'z-index': '4',
	},

	insideDiv: {
		width: '90%',
		maxWidth: '1121px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '70px',
	},

	title: {
		position: 'relative',

		fontFamily: 'Alphakind',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '54px',
		lineHeight: '110%',
		textTransform: 'uppercase',

		color: '#3C8430',
	},

	team: {
		position: 'relative',
		width: '100%',
		marginTop: '86px',

		display: 'flex',
		flexWrap: 'wrap',
		gap: '52px',
	},

	oneMember: {
		position: 'relative',
		flex: '30%',
	},

	avatar: {
		position: 'relative',
		width: '100%',
		height: 'auto',

		'& img': {
			border: '1px solid #3C8430',
		},
	},

	bottom: {
		position: 'relative',
		width: '100%',

		background: `url(${teamBg.src})`,
		backgroundSize: '100% 100%',
		top: '-8px',
	},

	bottomTop: {
		position: 'relative',
		width: '90%',
		margin: '0 auto',
		paddingTop: '17px',

		display: 'flex',
		justifyContent: 'space-between',

		'& .bottomTopLeft': {
			position: 'relative',

			fontFamily: 'Milk Kids',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '24px',
			lineHeight: '100%',

			color: '#3C8430',
		},

		'& .bottomTopRight': {
			position: 'relative',

			fontFamily: 'Milk Kids',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '20px',
			lineHeight: '100%',

			color: '#3C8430',
		},
	},

	bottomDesc: {
		position: 'relative',
		width: '90%',
		margin: '0 auto',
		marginTop: '16px',
		paddingBottom: '40px',

		fontFamily: 'Milk Kids',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '16px',
		lineHeight: '115%',

		color: '#4A4A4A',
	},

	// 700px
	['@media (max-width: 700px)']: {
		title: {
			fontSize: '24px',
		},

		team: {
			marginTop: '20px',

			display: 'block',
		},

		oneMember: {
			width: '100%',
			maxWidth: '300px',
			margin: '0 auto',
			marginBottom: '14px',
		},

		bottomTop: {
			'& .bottomTopLeft': {
				fontSize: '14px',
			},

			'& .bottomTopRight': {
				fontSize: '14px',
			},
		},

		bottomDesc: {
			fontSize: '12px',
		},
	},
});

export default useStyles;
