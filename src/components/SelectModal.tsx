import versionList from "../data/video-list"
import { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import React from "react"
import { Transition } from "@headlessui/react"

type Props = {
	show: boolean
	isVideoSelected: boolean[]
	toggleVideo: (index: number) => void
	onClose: () => void
}

const SelectModal = ({
	show,
	isVideoSelected,
	toggleVideo,
	onClose,
}: Props) => {
	const [isBrowser, setIsBrowser] = useState(false)

	useEffect(() => {
		setIsBrowser(true)
	}, [])

	const handleClose = () => {
		onClose()
	}

	const listItems = versionList.map((version, index) => (
		<li key={index} className="items-center justify-center">
			<button
				className={`relative h-[0.75em] -skew-x-6 whitespace-nowrap font-display text-4xl leading-tight
					${
						version.isSelectable
							? "text-stroke-white hover:after:content-['◀']"
							: "opacity-25 text-stroke"
					}
					${isVideoSelected[index] ? "text-white" : "text-stroke"}
					after:absolute after:-my-[0.04em] after:ml-[0.5em] after:font-sans after:leading-none after:text-white
					lg:text-6xl lg:leading-tight 2xl:text-8xl 2xl:leading-tight`}
				onClick={() => version.isSelectable ?? toggleVideo(index)}
			>
				{version.name}
			</button>
		</li>
	))

	const modalContent = (
		<Transition show={show}>
			<Transition.Child
				enter="transition-opacity duration-500"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="transition-opacity duration-500 ease-in-cubic"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<div className="absolute h-auto w-screen overflow-hidden bg-black">
					<div
						className="flex min-h-screen w-screen -rotate-12 flex-col items-center justify-center"
						onClick={handleClose}
					>
						<Transition.Child
							enter="transition-transform duration-500"
							enterFrom="translate-y-[100%]"
							enterTo="translate-y-0"
							leave="transition-transform duration-500 ease-in-cubic"
							leaveFrom="translate-y-0"
							leaveTo="translate-y-[-100%]"
						>
							<ul className="container flex flex-col items-center px-4 py-16">
								{listItems}
							</ul>
						</Transition.Child>
					</div>
				</div>
			</Transition.Child>
		</Transition>
	)

	return isBrowser
		? ReactDOM.createPortal(
				modalContent,
				document.getElementById("modal-root") as Element
		  )
		: null
}

export default SelectModal
