import { Item } from "./Item"
import versionList from "../data/video-list"
import { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import React from "react"
import { Transition } from "@headlessui/react"

type Props = {
	show: boolean
	isVideoSelected: boolean[]
	toggleVideo: (index: number) => () => void
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
			<Item
				name={version.name}
				selectedByDefault={isVideoSelected[index]}
				isSelectable={version.isSelectable}
				handleClick={toggleVideo(index)}
			/>
		</li>
	))

	const modalContent = (
		<div className="absolute h-auto w-screen overflow-hidden bg-black">
			<div
				className="flex min-h-screen w-screen -rotate-12 flex-col items-center justify-center"
				onClick={handleClose}
			>
				<ul className="container flex flex-col items-center px-4 py-16">
					{listItems}
				</ul>
			</div>
		</div>
	)

	return isBrowser
		? ReactDOM.createPortal(
				modalContent,
				document.getElementById("modal-root") as Element
		  )
		: null
}

export default SelectModal
