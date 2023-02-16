import { Fragment } from "react"
import { Transition } from "@headlessui/react"
import type { NextPage } from "next"
import videoList from "../data/video-list"
import Item from "../components/Item"

const Select: NextPage = () => {
	const listItems = videoList.map((videoInfo, index) => (
		<Item key={index} index={index} videoInfo={videoInfo} />
	))

	return (
		<Transition show={true} as={Fragment} appear>
			<div className="fixed inset-0 flex items-center justify-center">
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

				<div className="absolute h-[200vh] w-[200vw] -rotate-12 items-center overflow-y-auto">
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
				</div>
				<button
					className="absolute top-0 right-0 h-8 w-8 bg-white/10"
					// onClick={onClose}
				/>
			</div>
		</Transition>
	)
}

export default Select
