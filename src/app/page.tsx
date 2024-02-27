import Image from 'next/image'
import MainLoading from '@/components/main-loading'
import Game from '@/components/game'
import WinScreen from '@/components/WinScreen'

export default function Home() {
	return (
		<main
			className='flex min-h-screen items-center justify-center relative flex-col p-6 md:p-12 overflow-hidden bg-[#f4d7d7]'
			style={{
				backgroundImage:
					'radial-gradient(rgba(121, 34, 32, 0.15) 2px, transparent 0px)',
				backgroundSize: '48px 48px',
			}}
		>
			{/* <Image
				fill
				src={'/grains.png'}
				className='w-full h-full pointer-events-none opacity-40'
				alt='grains texture'
			/> */}
			<MainLoading key={'loader'} />
			<div className='self-start mb-10'>
				<h1
					className='text-5xl md:text-6xl font-extrabold tracking-tight text-[#824141]'
					style={{ textShadow: '5px 5px #debcba' }}
				>
					iro!
				</h1>
			</div>
			<div className='w-full my-auto self-center'>
				<Game />
			</div>
			{/* <WinScreen /> */}
		</main>
	)
}
