const convert = require('color-convert')

export const randomColor = () => {
	const h = Math.floor(Math.random() * 361)
	const s = Math.floor(Math.random() * 101)
	const l = Math.floor(Math.random() * 101)

	return { hsl: [h, s, l], hex: `#${convert.hsl.hex([h, s, l])}` }
}
