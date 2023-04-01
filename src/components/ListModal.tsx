import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import videoInfos from "../data/video-infos"
import ListItem from "./ListItem"

type Props = {
	isOpen: boolean
	onClose: () => void
}

const ListModal = ({ isOpen, onClose }: Props) => {
	const listItems = videoInfos.map((videoInfo, index) => (
		// We can't assign a number to the id prop because of the following bug:
		// Cannot drag items with falsy identifiers (such as 0)
		// https://github.com/clauderic/dnd-kit/issues/858
		<ListItem key={index} id={String(index)} videoInfo={videoInfo} />
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
							className="mx-auto my-[100vh] flex w-fit flex-col items-center justify-center"
						>
							{listItems}
						</Dialog.Panel>
					</Transition.Child>
				</div>
				<button
					className="absolute right-0 top-0 h-8 w-8 bg-white/10"
					onClick={onClose}
				/>
			</Dialog>
		</Transition>
	)
}

export default ListModal
