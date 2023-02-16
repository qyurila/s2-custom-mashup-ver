import usePlayersStore from "../store/players-store"
import { Video } from "./Video"

type Props = {
	isVisible: boolean
}

const PlayerContainer = (props: Props) => {
	const videos = usePlayersStore((state) => state.videos)

	const players = videos.map((video, index) => (
		<Video key={index} index={index} videoId={video.videoId} offset={0} />
	))

	return (
		<>
			{props.isVisible && (
				<div className="container grid grid-cols-2 items-center justify-center justify-items-center px-4 py-16">
					{players}
				</div>
			)}
		</>
	)
}
export default PlayerContainer
