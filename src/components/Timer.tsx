'use client'

import { LOADING_DURATION } from '@/utils/constants'
import {
	Clock1,
	Clock2,
	Clock3,
	Clock4,
	Clock5,
	Clock6,
	Clock7,
	Clock8,
	Clock9,
	Clock10,
	Clock11,
	Clock12,
} from 'lucide-react'
import { ReactElement, useEffect, useState } from 'react'

const Timer = () => {
	const [started, setStarted] = useState(false)
	const [icon, setIcon] = useState(12)
	const [counter, setCounter] = useState(0)
	const clocks: any = {
		1: <Clock1 />,
		2: <Clock2 />,
		3: <Clock3 />,
		4: <Clock4 />,
		5: <Clock5 />,
		6: <Clock6 />,
		7: <Clock7 />,
		8: <Clock8 />,
		9: <Clock9 />,
		10: <Clock10 />,
		11: <Clock11 />,
		12: <Clock12 />,
	}

	useEffect(() => {
		if (!started) return
		const interval = setInterval(() => {
			setCounter(prev => prev + 1)
			if (icon === 12) return setIcon(1)
			setIcon(prev => prev + 1)
		}, 1000)

		return () => clearInterval(interval)
	}, [started, icon])

	useEffect(() => {
		const timeout = setTimeout(() => {
			setStarted(true)
		}, LOADING_DURATION * 1000)

		return () => clearTimeout(timeout)
	}, [])

	const formatCounter = () => {
		let m = String(Math.floor(counter / 60))
		let s = String(counter % 60)
		if (m.length === 1) m = '0' + m
		if (s.length === 1) s = '0' + s

		return <span>{`${m}:${s}`}</span>
	}

	return (
		<div
			className='bg-[#824141] flex items-center px-3 text-lg font-bold min-w-32 py-2 rounded-lg gap-4'
			style={{
				boxShadow: `5px 5px 0 0 #debcba`,
			}}
		>
			<div>{clocks[icon]}</div>
			<div>{formatCounter()}</div>
		</div>
	)
}

export default Timer
