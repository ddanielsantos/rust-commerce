import { createStitches, globalCss } from '@stitches/react'
import type * as Stitches from '@stitches/react'

export const { styled } = createStitches({
	theme: {
		colors: {
			indigo100: 'indigo',
		},
		space: {
			0.5: '0.125rem',
			1: '0.25rem',
			1.5: '0.375rem',
			2: '0.5rem',
			2.5: '0.625rem',
			3: '0.75rem',
			3.5: '0.875rem',
			4: '1rem',
			5: '1.25rem',
			6: '1.5rem',
			7: '1.75rem',
			8: '2rem',
			9: '2.25rem',
			10: '2.5rem',
			12: '3rem',
			14: '3.5rem',
			16: '4rem',
			20: '5rem',
			24: '6rem',
			28: '7rem',
			32: '8rem',
			36: '9rem',
			40: '10rem',
			44: '11rem',
			48: '12rem',
			52: '13rem',
			56: '14rem',
			60: '15rem',
			64: '16rem',
			72: '18rem',
			80: '20rem',
			96: '24rem',
		},
		sizes: {
			max: 'max-content',
			min: 'min-content',
			full: '100%',
			'3xs': '14rem',
			'2xs': '16rem',
			xs: '20rem',
			sm: '24rem',
			md: '28rem',
			lg: '32rem',
			xl: '36rem',
			'2xl': '42rem',
			'3xl': '48rem',
			'4xl': '56rem',
			'5xl': '64rem',
			'6xl': '72rem',
			'7xl': '80rem',
			'8xl': '90rem',
			container: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
			},
		},
		radii: {
			sm: '0.125rem',
			base: '0.25rem',
			md: '0.375rem',
			lg: '0.5rem',
			xl: '0.75rem',
			'2xl': '1rem',
			'3xl': '1.5rem',
			full: '9999px',
		},
	},
	media: {
		bp1: '(min-width: 30rem)',
		bp2: '(min-width: 48rem)',
		bp3: '(min-width: 62rem)',
		bp4: '(min-width: 80rem)',
		bp5: '(min-width: 96rem)',
	},
	utils: {
		p: (value: Stitches.PropertyValue<'padding'>) => ({
			padding: value,
		}),
		pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
			paddingTop: value,
		}),
		pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
			paddingRight: value,
		}),
		pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
			paddingBottom: value,
		}),
		pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
			paddingLeft: value,
		}),
		px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
			paddingLeft: value,
			paddingRight: value,
		}),
		py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
			paddingTop: value,
			paddingBottom: value,
		}),

		m: (value: Stitches.PropertyValue<'margin'>) => ({
			margin: value,
		}),
		mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
			marginTop: value,
		}),
		mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
			marginRight: value,
		}),
		mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
			marginBottom: value,
		}),
		ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
			marginLeft: value,
		}),
		mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
			marginLeft: value,
			marginRight: value,
		}),
		my: (value: Stitches.PropertyValue<'marginTop'>) => ({
			marginTop: value,
			marginBottom: value,
		}),

		ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),

		fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
			flexDirection: value,
		}),
		fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),

		ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
			alignItems: value,
		}),
		ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
			alignContent: value,
		}),
		jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
			justifyContent: value,
		}),
		fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
		fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({
			flexShrink: value,
		}),
		fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

		bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
			backgroundColor: value,
		}),

		br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
			borderRadius: value,
		}),
		btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
			borderTopRightRadius: value,
		}),
		bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
			borderBottomRightRadius: value,
		}),
		bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
			borderBottomLeftRadius: value,
		}),
		btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
			borderTopLeftRadius: value,
		}),

		bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({ boxShadow: value }),

		lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({
			lineHeight: value,
		}),

		ox: (value: Stitches.PropertyValue<'overflowX'>) => ({ overflowX: value }),
		oy: (value: Stitches.PropertyValue<'overflowY'>) => ({ overflowY: value }),

		pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
			pointerEvents: value,
		}),
		us: (value: Stitches.PropertyValue<'userSelect'>) => ({
			WebkitUserSelect: value,
			userSelect: value,
		}),

		userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
			WebkitUserSelect: value,
			userSelect: value,
		}),

		size: (value: Stitches.PropertyValue<'width'>) => ({
			width: value,
			height: value,
		}),
	},
})

export { globalCss }
