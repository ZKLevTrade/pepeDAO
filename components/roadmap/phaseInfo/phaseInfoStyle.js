// >> Modules
import getVariable from '../../globalVariables';
import { makeStyles } from '@mui/styles';

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
		marginTop: '65px',
		paddingTop: '65px',
		borderTop: '1px solid #3C8430',

		display: 'flex',
		flexWrap: 'wrap',
		gap: '75px',
	},

	h3: {
		position: 'relative',

		fontFamily: 'Milk Kids',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '18px',
		lineHeight: '140%',

		color: '#4A4A4A',
	},

	left: {
		position: 'relative',
		width: '776px',
		height: 'auto',
	},

	right: {
		position: 'relative',
		width: 'calc(100% - 776px - 75px)',
	},

	onePoints: {
		position: 'relative',
		width: '100%',
		marginTop: '24px',
	},

	pointTitle: {
		position: 'relative',

		fontFamily: 'Alphakind',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '24px',
		lineHeight: '120%',
		textTransform: 'uppercase',

		color: '#3C8430',
	},

	pointsDraw: {
		position: 'relative',
		width: '100%',
		marginTop: '15px',

		display: 'flex',
		gap: '8px',
		flexWrap: 'wrap',
	},

	oneDraw: {
		position: 'relative',
		width: '62px',
		height: 'auto',
	},

	// >>>>>>>>>>>>>> Mobile
	// 1300px
	['@media (max-width: 1300px)']: {
		left: {
			width: '500px',
		},

		right: {
			width: 'calc(100% - 500px - 75px)',
		},
	},

	// 1100px
	['@media (max-width: 1100px)']: {
		left: {
			width: '400px',
		},

		right: {
			width: 'calc(100% - 400px - 35px)',
		},

		insideDiv: {
			marginTop: '35px',
			paddingTop: '35px',

			gap: '35px',
		},
	},

	// 1000px
	['@media (max-width: 1000px)']: {
		h3: {
			fontSize: '14px',
		},

		pointTitle: {
			fontSize: '18px',
		},

		oneDraw: {
			width: '52px',
		},
	},

	// 850px
	['@media (max-width: 850px)']: {
		left: {
			width: '100%',
		},

		right: {
			width: '100%',
		},
	},
});

export default useStyles;
