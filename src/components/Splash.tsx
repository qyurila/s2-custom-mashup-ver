import { Transition } from "@headlessui/react"
import Image from "next/image"

const Splash = ({ isSplashOn }: { isSplashOn: boolean }) => {
	return (
		<Transition
			show={isSplashOn}
			appear={true}
			className="absolute my-auto flex h-[100vh] w-full items-center bg-black"
			enter="transition duration-1000 ease-in-out"
			enterFrom="opacity-0 translate-y-[20vh]"
			enterTo="opacity-100 translate-y-0"
			leave="transition duration-500 ease-out"
			leaveFrom="opacity-100 translate-y-0"
			leaveTo="opacity-0 translate-y-[-20vh]"
		>
			<div className="absolute z-10">
				<Image
					src="/images/splash.png"
					alt="splash"
					width={1920}
					height={1080}
				/>
			</div>
		</Transition>
	)
}

export default Splash
