// >> Modules
import { makeStyles } from '@mui/styles';
import getVariable from './globalVariables';

// >> Styling
const useGlobalStyles = makeStyles({
	container: {
		width: '100%',
		minHeight: '100vh',
		position: 'relative',
		overflow: 'hidden',
		background: '#F5FFF3',
		color: '#4A4A4A',
	},

	onePage: {
		position: 'relative',
		width: '100%',

		transition: 'opacity .7s, left .7s',
	},

	containerPrivacy: {
		width: '100%',
		position: 'relative',
		overflow: 'hidden',
		marginLeft: '50px',
		marginTop: '40px',
		paddingRight: '10%',
		paddingBottom: '40px',
		background: '#F5FFF3',
		color: '#4A4A4A',
	},

	image: {
		position: 'relative',
		layout: 'responsive',
		objectFit: 'contain',
		width: '100%',
		height: 'auto',
	},

	imageCover: {
		position: 'relative',
		layout: 'responsive',
		objectFit: 'cover',
		width: '100%',
		height: 'auto',
	},

	pageLoader: {
		width: '100%',
		height: '100%',
		position: 'fixed',
		background: '#ffffff',
		'z-index': '6',
		top: '0',
		left: '0',
		pointerEvents: 'none',
	},

	pageLoaderTransition: {
		transition: 'opacity .7s',
	},

	loading: {
		position: 'fixed',
		width: '160px',
		height: 'auto',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%,-50%)',
	},

	toastStyle: {
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '14px',
	},
});

export default useGlobalStyles;
