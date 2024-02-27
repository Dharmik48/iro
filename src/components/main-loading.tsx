'use client'

import { useState } from 'react'
import { AnimatePresence, Variants, motion } from 'framer-motion'
import Image from 'next/image'
import { LOADING_DURATION as DURATION } from '@/utils/constants'

const MainLoading = () => {
	const [animationState, setAnimationState] = useState('live')

	const colors = [
		{ bg: '#331d45', text: '#a35ddd' },
		{ bg: '#48173c', text: '#e04db7' },
		{ bg: '#591b1c', text: '#ee5255' },
		{ bg: '#58341a', text: '#ed9351' },
		{ bg: '#6e571e', text: '#ffc944' },
		{ bg: '#6e6c25', text: '#fffa55' },
		{ bg: '#244625', text: '#54d457' },
		{ bg: '#193533', text: '#61cdc5' },
		{ bg: '#1c2f4d', text: '#528be5' },
	]
	const variants = {
		text: { color: colors.map(c => c.text) },
		bg: { backgroundColor: colors.map(c => c.bg) },
		hide: { translateY: '100%' },
	}

	if (animationState === 'hidden') return null

	return (
		<AnimatePresence>
			<motion.div
				className='absolute inset-0 items-center justify-center flex z-50'
				initial={{ backgroundColor: colors[0].bg }}
				animate={animationState === 'done' ? 'hide' : 'bg'}
				variants={variants}
				transition={{
					duration: animationState === 'done' ? DURATION / 2 : DURATION,
					type: animationState === 'done' ? 'spring' : 'keyframes',
				}}
				onAnimationComplete={e =>
					e === 'bg' ? setAnimationState('done') : setAnimationState('hidden')
				}
			>
				<Image
					fill
					src={'/grains.png'}
					className='w-full h-full opacity-40'
					alt='grains texture'
				/>
				<div className='flex flex-col items-center justify-between'>
					<motion.h1
						className='font-black drop-shadow-sm text-9xl'
						initial={{
							color: colors[0].text,
						}}
						animate={'text'}
						variants={variants}
						transition={{ duration: DURATION, type: 'keyframes' }}
					>
						iro!
					</motion.h1>
					<ColorAnimatedSpan
						text='Can you find the matching color?'
						variants={variants}
						colors={colors}
						className='text-lg tracking-widest'
					/>
				</div>
				<ColorAnimatedSpan
					text='Loading...'
					variants={variants}
					colors={colors}
					className='absolute bottom-10 right-12 text-lg'
				/>
			</motion.div>
		</AnimatePresence>
	)
}

export default MainLoading

const ColorAnimatedSpan = ({
	text,
	colors,
	variants,
	className,
}: {
	text: string
	colors: { text: string; bg: string }[]
	variants: Variants
	className?: string
}) => {
	return (
		<motion.span
			className={className}
			initial={{ color: colors[0].text }}
			animate={'text'}
			variants={variants}
			transition={{ duration: DURATION, type: 'keyframes' }}
		>
			{text}
		</motion.span>
	)
}
