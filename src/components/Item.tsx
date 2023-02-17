import type { VideoInfo } from "../data/video-list"
import usePlayersStore from "../store/players-store"

type Props = {
	index: number
	videoInfo: VideoInfo
}

const Item = ({ index, videoInfo }: Props) => {
	const { isSelectable, title, videoId } = videoInfo
	const { videos, appendVideo, removeVideo } = usePlayersStore(
		(state) => state
	)

	const isVideoSelected = (videoId: string) => {
		return videos.some((video) => video.videoId === videoId)
	}

	const handleClick = () => {
		if (!isSelectable) return

		if (isVideoSelected(videoId)) {
			removeVideo(index)
		} else {
			appendVideo(index, videoInfo.videoId)
		}
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
				${isVideoSelected(videoId) ? "text-white" : "text-stroke"}
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
