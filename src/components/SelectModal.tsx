import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import videoInfos from "../data/video-infos"
import Item from "./Item"

type Props = {
	isOpen: boolean
	onClose: () => void
}

const SelectModal = ({ isOpen, onClose }: Props) => {
	const listItems = videoInfos.map((videoInfo, index) => (
		<Item key={index} id={index + 1} videoInfo={videoInfo} />
	))

	return (
		<Transition show={isOpen} as={Fragment} appear>
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

				<div className="absolute h-[200vh] w-[200vw] -rotate-12 overflow-y-auto">
					<Transition.Child
						as={Fragment}
						enter="transition-transform duration-500"
						enterFrom="translate-y-[100vh]"
						enterTo="translate-y-0"
						leave="transition-transform duration-500 ease-in-cubic"
						leaveFrom="translate-y-0"
						leaveTo="translate-y-[-100vh]"
					>
						<Dialog.Panel
							as="ul"
							className="my-[100vh] mx-auto flex w-fit flex-col items-center justify-center"
						>
							{listItems}
						</Dialog.Panel>
					</Transition.Child>
				</div>
				<button
					className="absolute top-0 right-0 h-8 w-8 bg-white/10"
					onClick={onClose}
				/>
			</Dialog>
		</Transition>
	)
}

export default SelectModal
