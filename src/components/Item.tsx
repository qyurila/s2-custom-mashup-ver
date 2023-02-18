import { useState } from "react"
import type { VideoInfo } from "../data/video-infos"
import usePlayersStore from "../store/players-store"

type Props = {
	id: number
	videoInfo: VideoInfo
}

const Item = (props: Props) => {
	const { id, videoInfo } = props
	const { title, isSelectable } = videoInfo

	const [videos, appendVideo, removeVideo] = usePlayersStore((state) => [
		state.videos,
		state.appendVideo,
		state.removeVideo,
	])
	const [isSelected, setIsSelected] = useState(
		videos.some((video) => video.id === id)
	)

	const handleClick = () => {
		if (!isSelectable) return

		if (isSelected) {
			removeVideo(id)
		} else {
			appendVideo(id)
		}

		setIsSelected(!isSelected)
	}

	return (
		<li key={id} className="items-center justify-center">
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
