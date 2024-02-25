import MainLoading from '@/components/main-loading'
import { AnimatePresence } from 'framer-motion'

export default function Home() {
	return (
		<main className='flex min-h-screen relative flex-col items-center justify-center overflow-hidden'>
			<MainLoading key={'loader'} />
		</main>
	)
}
