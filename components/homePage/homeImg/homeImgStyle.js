// >> Modules
import getVariable from '../../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Buttons
import btn_scroll from '../../../public/btn_scroll.png';

// >> Styling
const useStyles = makeStyles({
	outsideDiv: {
		width: '100%',
		minHeight: '80vh',
		position: 'relative',
		'z-index': '4',
	},

	home_image: {
		position: 'relative',
		width: '90%',
		maxWidth: '1402px',
		height: 'auto',
		margin: '0 auto',
	},

	bottom: {
		position: 'absolute',
		left: '5%',
		bottom: '30px',
		width: '90%',

		display: 'none',
		justifyContent: 'space-between',

		'& .left': {
			position: 'relative',

			fontFamily: 'Milk Kids',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '18px',
			lineHeight: '100%',
			textTransform: 'uppercase',

			color: '#4A4A4A',
		},

		'& .right': {
			position: 'relative',
			display: 'flex',
			gap: '39px',

			'& a': {
				'& p': {
					position: 'relative',

					fontFamily: 'Milk Kids',
					fontStyle: 'normal',
					fontWeight: '400',
					fontSize: '14px',
					lineHeight: '100%',

					color: '#4A4A4A',
					textDecoration: 'underline',
					transition: 'color .5s',
				},

				'&:hover': {
					'& p': {
						color: '#202020',
					},
				},
			},
		},
	},

	// >>>>>>>>>>>>>> Mobile
	// 1150px
	['@media (max-width: 1150px)']: {
		home_image: {
			marginTop: '50px',
		},

		bottom: {
			display: 'flex',
		},
	},

	// 450px
	['@media (max-width: 450px)']: {
		bottom: {
			'& .left': {
				fontSize: '12px',
			},

			'& .right': {
				gap: '16px',

				'& a': {
					'& p': {
						fontSize: '10px',
					},
				},
			},
		},
	},
});

export default useStyles;
