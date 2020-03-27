module.exports = {
	theme: {
		rotate: {
			// defaults to {}
			'-45': '-44.61deg',
			90: '90deg',
			180: '180deg',
			270: '270deg',
			'3d': ['0', '1', '0.5', '45deg']
		},
		backgroundImage: {
			// defaults to {}
			// pattern: "url('./img/okuk-pattern-dotted.svg')"
		},

		extend: {
			screens: {
				'sm-min': { min: '440px' },
				'sm-max': { max: '439px' },

				'sm-2-min': { min: '640px' },
				'sm-2-max': { max: '639px' },

				'sm/md': { min: '440px', max: '939px' },

				'md-min': { min: '840px' },
				'md-max': { max: '839px' },

				'md-2-min': { min: '940px' },
				'md-2-max': { max: '939px' },

				'lg-min': { min: '1040px' },
				'lg-max': { max: '1039px' },

				'md/lg': { min: '940px', max: '1039px' },

				'xl-min': { min: '1240px' },
				'xl-max': { max: '1239px' },

				'xl-2-min': { min: '1440px' },
				'xl-2-max': { max: '1439px' },

				'xl-3-min': { min: '1680px' },
				'xl-3-max': { max: '1679px' },

				'lg/xl': { min: '1240px', max: '1439px' }
			},
			colors: {
				'orange-okuk': '#DE4A09'
			},
			fontSize: {
				'11px': '0.6875rem',
				'sm-1': '.98rem',
				'9px': '0.5625rem',
				'22px': '1.375rem'
			},
			opacity: {
				29: '29%'
			},
			maxWidth: {
				'7xl': '80rem'
			},
			height: {
				'16-2-26': '26rem',
				'16-2-30': '30rem',
				'16-2-38': '38rem',
				72: '40rem',
				'130px': '130px',
				'144px': '144px'
			},
			width: {
				'12rem': '12rem',
				'14rem': '14rem',
				68: '20rem',
				82: '25rem',
				164: '50rem',
				'1/12-1': '13%',
				'1/4-1': '31%',
				'1/4-2': '40%',
				'2/4-1': '60%',
				'2/4-2': '63%',
				'3/4-1': '70%',
				'3/4-2': '72%',
				'11/12-1': '95%',
				'560px': '560px',
				'220px': '220px',
				'237px': '237px',
				'330px;': '330px;',
				'342px': '370px',
				'14%': '14%',
				'23%': '23%',
				'31%': '31%',
				'48%': '48%'
			},
			zIndex: {
				'-10': '-10'
			},
			inset: {
				'-3': '-3rem',
				4: '4rem',
				'-4': '-4rem',
				'-5': '-5rem',
				'-7': '-7rem',
				'-8': '-8rem',
				10: '10rem',
				'-10': '-10rem',
				13: '13rem',
				'-13': '-13rem',
				'-16': '-16rem',
				'-20': '-20rem',
				25: '25rem',
				'-30': '-30rem',
				'-40': '-40rem'
			},
			borderRadius: {
				'11px': '0.6875rem',
				'lg-2': '5rem',
				'6px': '0.375rem'
			},
			borderWidth: {
				'0-1': '0.1px'
			},
			margin: {
				'7px': '0.4375rem',
				'-72-2': '-20rem',
				72: '20rem',
				80: '24rem',
				88: '28rem'
			},
			padding: {
				'2-1': '0.6rem'
			},
			boxShadow: {
				'mobile-sidebar': '10px 2px 40px rgba(0, 0, 0, 0.1)',
				'mobile-settings': '0px 5px 20px rgba(96, 100, 112, 0.1)'
			}
		}
	},
	variants: ['responsive', 'hover', 'focus', 'active', 'disabled'],
	plugins: [
		require('tailwindcss-background-extended'), // no options to configure
		require('tailwindcss-transforms')({
			'3d': false // defaults to false
		}),
		function({ addUtilities }) {
			const newUtilities = {
				'.word-tracking': {
					'word-spacing': '.4rem'
				}
			};
			addUtilities(newUtilities, ['responsive', 'hover']);
		}
	]
};
