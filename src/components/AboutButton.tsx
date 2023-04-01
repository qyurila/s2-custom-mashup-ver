import { Transition } from "@headlessui/react"
import { Info } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const AboutButton = () => {
	const [isAboutOpen, setIsAboutOpen] = useState(false)

	return (
		<button
			onMouseLeave={() => setIsAboutOpen(false)}
			className="fixed bottom-8 right-8 flex h-20 w-80 justify-end"
		>
			<Transition
				show={isAboutOpen}
				className="absolute flex h-20 w-80 items-center justify-end"
				enter="origin-[90%_50%] transform transition duration-200"
				enterFrom="-rotate-[30deg] opacity-0"
				enterTo="rotate-0 opacity-100"
				leave="origin-[90%_50%] transform transition duration-200"
				leaveFrom="rotate-0 opacity-100"
				leaveTo="-rotate-[30deg] opacity-0"
			>
				<div>
					<h3 className="pr-2 text-right font-caption text-2xl text-gray-200">
						웹페이지 기획 및 제작
					</h3>
					<h2 className="pr-2 text-right font-caption text-3xl text-gray-200">
						릴라
					</h2>
				</div>
				<Image
					className="mr-1 rounded-full"
					src="/images/about.jpg"
					alt="about"
					width={72}
					height={72}
				/>
			</Transition>
			<Transition
				show={!isAboutOpen}
				enter="transform transition duration-200 ease-linear"
				enterFrom="rotate-[30deg] opacity-0"
				enterTo="rotate-0 opacity-100"
				leave="transform transition duration-200 ease-linear"
				leaveFrom="rotate-0 opacity-100"
				leaveTo="rotate-[30deg] opacity-0"
			>
				<Info
					onMouseEnter={() => setIsAboutOpen(true)}
					size={80}
					className="stroke-gray-300"
				/>
			</Transition>
		</button>
	)
}

export default AboutButton
