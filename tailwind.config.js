module.exports = {
	theme: {
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
				white: '#c2c5cc',
				'bf-navy': '#171b29',
				'bf-navy-1': '#212432',
				'bf-navy-2': '#0f1218',
				'bf-navy-3': '#272a38',
				'bf-yellow': '#d2a53e',
				'bf-green': '#366e53',
				'bf-orange': '#af873f',
				'bf-red': '#d72f4e',
				'bf-grey': '#363945',
				'bf-grey-1': '#7c8190',
				'bf-grey-2': '#3d3f4b',
				'bf-grey-3': '#2e313e'
			},
			borderRadius: {
				'07': '0.7rem'
				//
			},
			spacing: {
				'015': '0.15rem',
				'04': '0.4rem',
				'225': '2.25rem',
				'47p': '47%'
				//
			},
			minWidth: {
				'12': '12rem'
			},
			inset: {
				'1': '1rem',
				'4': '4rem'
			}
		}
	},
	variants: ['responsive', 'hover', 'focus', 'active', 'disabled'],
	plugins: [
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
