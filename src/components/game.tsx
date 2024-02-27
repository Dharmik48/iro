'use client'

import { randomColor } from '@/utils/generator'
import { useEffect, useState } from 'react'
import { HexColorPicker } from 'react-colorful'

// import { convert } from 'color-convert'

const convert = require('color-convert')

interface color {
	hsl: number[]
	hex: string
}

const Game = () => {
	const ERROR_MARGIN = 0.05
	const [color, setColor] = useState<color>({
		hsl: [360, 100, 100],
		hex: '#000',
	})
	const [guessColor, setGuessColor] = useState<color>({
		hsl: [0, 0, 0],
		hex: '#fff',
	})
	const [guessed, setGuessed] = useState(false)
	const [bounds, setBounds] = useState<{ lower: number[]; upper: number[] }>({
		lower: [],
		upper: [],
	})

	useEffect(() => {
		setColor(randomColor())
		setGuessColor(randomColor())
	}, [])

	useEffect(() => {
		setBounds({
			lower: color.hsl.map(p => p * (1 - ERROR_MARGIN)),
			upper: color.hsl.map(p => p + p * ERROR_MARGIN),
		})
	}, [color])

	useEffect(() => {
		const correct = guessColor.hsl.every(
			(el, i) => el >= bounds.lower[i] && el <= bounds.upper[i]
		)

		if (correct) setGuessed(true)
	}, [guessColor, bounds])

	return (
		<div className='flex items-center flex-col gap-10 md:flex-row justify-center'>
			<div
				className='relative aspect-square w-full max-w-96 border-8 rounded-xl grid items-center'
				style={{
					backgroundColor: color.hex,
					borderColor: `hsl(${color.hsl[0]} ${color.hsl[1]} 30)`,
					boxShadow: `8px 8px 0 0 hsl(${color.hsl[0]} ${color.hsl[1]} 80)`,
				}}
			>
				<div
					className='absolute aspect-square p-4 h-1/2 bottom-0 right-0 flex items-center justify-center'
					style={{
						backgroundColor: guessColor.hex,
						borderRadius: 'calc(0.75rem - 8px)',
					}}
				>
					<p className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] uppercase'>
						{guessColor.hex}
					</p>
				</div>
			</div>
			<div
				className='relative aspect-square w-full max-w-96 border-8 rounded-xl'
				style={{
					borderColor: `hsl(${guessColor.hsl[0]} ${guessColor.hsl[1]} 30`,
					boxShadow: `8px 8px 0 0 hsl(${guessColor.hsl[0]} ${guessColor.hsl[1]} 80`,
				}}
			>
				<HexColorPicker
					className='w-full'
					style={{ width: '100%', height: '100%', borderRadius: 0 }}
					color={guessColor.hex}
					onChange={e => setGuessColor({ hsl: convert.hex.hsl(e), hex: e })}
				/>
			</div>
		</div>
	)
}

export default Game
