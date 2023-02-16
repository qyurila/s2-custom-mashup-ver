import versionList from "../data/video-list"
import { Fragment } from "react"
import { Transition, Dialog } from "@headlessui/react"

type Props = {
	isOpen: boolean
	isVideoSelected: boolean[]
	toggleVideo: (index: number) => void
	onClose: () => void
}

const SelectModal = ({ isOpen, onClose, ...props }: Props) => {
	const listItems = versionList.map((version, index) => (
		<li key={index} className="items-center justify-center">
			<button
				className={`relative h-[0.75em] -skew-x-6 whitespace-nowrap font-display text-4xl leading-tight
					${
						version.isSelectable
							? "text-stroke-white hover:after:content-['◀']"
							: "opacity-25 text-stroke"
					}
					${props.isVideoSelected[index] ? "text-white" : "text-stroke"}
					after:absolute after:-my-[0.04em] after:ml-[0.5em] after:font-sans after:leading-none after:text-white
					lg:text-6xl lg:leading-tight 2xl:text-8xl 2xl:leading-tight`}
				onClick={() => version.isSelectable && props.toggleVideo(index)}
			>
				{version.name}
			</button>
		</li>
	))

	return (
		<Transition show={isOpen} as={Fragment}>
			<Dialog
				open={isOpen}
				onClose={onClose}
				className="fixed inset-0 flex items-center justify-center"
			>
				<Transition.Child
					as={Fragment}
					enter="transition-opacity duration-500"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-opacity duration-500 ease-in-cubic"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black" aria-hidden={true} />
				</Transition.Child>

				<Dialog.Panel className="absolute h-[200vh] w-[200vw] -rotate-12 items-center overflow-y-auto">
					<div />
					<Transition.Child
						as={Fragment}
						enter="transition-transform duration-500"
						enterFrom="translate-y-[100vh]"
						enterTo="translate-y-0"
						leave="transition-transform duration-500 ease-in-cubic"
						leaveFrom="translate-y-0"
						leaveTo="translate-y-[-100vh]"
					>
						<ul className="my-[100vh] flex flex-col items-center justify-center">
							{listItems}
						</ul>
					</Transition.Child>
				</Dialog.Panel>
				<button
					className="absolute top-0 right-0 h-8 w-8 bg-white/10"
					onClick={onClose}
				/>
			</Dialog>
		</Transition>
	)
}

export default SelectModal
