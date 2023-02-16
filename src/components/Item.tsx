import { useState } from "react"
import type { VideoInfo } from "../data/video-list"
import usePlayersStore from "../store/players-store"

type Props = {
	index: number
	videoInfo: VideoInfo
}

const Item = ({ index, videoInfo }: Props) => {
	const { selectedByDefault, isSelectable, title } = videoInfo

	const [isSelected, setIsSelected] = useState(selectedByDefault)
	const [appendVideo, removeVideo] = usePlayersStore((state) => [
		state.appendVideo,
		state.removeVideo,
	])

	const handleClick = () => {
		if (!isSelectable) return

		if (isSelected) {
			removeVideo(index)
		} else {
			appendVideo(index, videoInfo.videoId)
		}

		setIsSelected(!isSelected)
	}

	return (
		<li key={index} className="items-center justify-center">
			<button
				className={`relative h-[0.75em] -skew-x-6 whitespace-nowrap font-display text-4xl leading-tight
				${
					isSelectable
						? "text-stroke-white hover:after:content-['◀']"
						: "opacity-25 text-stroke"
				}
				${isSelected ? "text-white" : "text-stroke"}
				after:absolute after:-my-[0.04em] after:ml-[0.5em] after:font-sans after:leading-none after:text-white
				lg:text-6xl lg:leading-tight 2xl:text-8xl 2xl:leading-tight`}
				onClick={handleClick}
			>
				{title}
			</button>
		</li>
	)
}

export default Item
