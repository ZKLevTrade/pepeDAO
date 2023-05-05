// >> Modules
import getVariable from '../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Buttons
import btn_link from '../../public/btn_link.png';

// >> Styling
const useStyles = makeStyles({
	outsideDiv: {
		width: '100%',
		position: 'relative',
		'z-index': '4',
		paddingBottom: '40px',
	},

	insideDiv: {
		width: '90%',
		maxWidth: '1350px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '115px',
		paddingTop: '66px',
		borderTop: '1px solid #3C8430',
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

		color: '#4A4A4A',
	},

	socials: {
		position: 'relative',
		marginTop: '66px',
		width: '100%',

		display: 'flex',
		gap: '22px',
	},

	oneSocial: {
		position: 'relative',
		height: '129px',
		flex: '50%',

		display: 'flex',
		justifyContent: 'space-between',
		padding: '50px 40px',

		background: '#DAFFD5',
		transition: 'background .5s',

		'&:hover': {
			background: '#BFFFB5',
		},

		'& p': {
			position: 'relative',

			fontFamily: 'Alphakind',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '32px',
			lineHeight: '100%',
			textTransform: 'uppercase',

			color: '#3C8430',
		},

		'& .arrow': {
			position: 'relative',

			width: '28px',
			height: '35px',
			background: `url(${btn_link.src})`,
			backgroundSize: '100% 100%',
		},
	},

	bottom: {
		position: 'relative',
		marginTop: '66px',
		width: '100%',

		display: 'flex',
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

	// 700px
	['@media (max-width: 700px)']: {
		insideDiv: {
			marginTop: '60px',
			paddingTop: '60px',
		},

		h2: {
			fontSize: '14px',
		},

		h1: {
			fontSize: '24px',
		},

		h3: {
			fontSize: '12px',
		},

		socials: {
			marginTop: '24px',
			display: 'block',
		},

		oneSocial: {
			height: '58px',
			width: '100%',
			marginBottom: '12px',

			padding: '18px 20px',

			'& p': {
				fontSize: '18px',
			},

			'& .arrow': {
				width: '24px',
				height: 'auto',
			},
		},

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
