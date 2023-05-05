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

		marginTop: '98px',
		paddingTop: '98px',
		borderTop: '1px solid #3C8430',
	},

	top: {
		position: 'relative',
		width: '100%',
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
		maxWidth: '530px',

		color: '#4A4A4A',
	},

	bottomDao: {
		position: 'relative',
		width: '100%',
		maxWidth: '1350px',
		margin: '0 auto',
		marginTop: '120px',
	},

	daoH1: {
		position: 'relative',
		width: '100%',
		marginTop: '18px',

		fontFamily: 'Alphakind',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '54px',
		lineHeight: '110%',
		textTransform: 'uppercase',

		color: '#3C8430',
	},

	daoH2: {
		position: 'relative',
		width: '100%',
		marginTop: '28px',

		fontFamily: 'Milk Kids',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '18px',
		lineHeight: '140%',

		color: '#4A4A4A',
	},

	daoImage: {
		position: 'relative',
		width: '100%',
		height: 'auto',
		marginTop: '80px',
	},

	daoImage2: {
		position: 'relative',
		width: '100%',
		height: 'auto',
		marginTop: '25px',
		display: 'none',
	},

	// >>>>>>>>>>>>>> Mobile
	// 1000px
	['@media (max-width: 1000px)']: {
		insideDiv: {
			marginTop: '60px',
			paddingTop: '60px',
		},
	},

	// 700px
	['@media (max-width: 700px)']: {
		h2: {
			fontSize: '14px',
		},

		h1: {
			fontSize: '24px',
		},

		h3: {
			marginTop: '12px',
		},

		bottomDao: {
			background: '#DAFFD5',
			padding: '17px 13px',
			marginTop: '40px',
		},

		daoH1: {
			fontSize: '24px',
		},

		daoH2: {
			fontSize: '14px',
			marginTop: '8px',
		},

		daoImage: {
			display: 'none',
		},

		daoImage2: {
			display: 'block',
		},
	},
});

export default useStyles;
