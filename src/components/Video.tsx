import type { YouTubeProps } from "react-youtube"
import YouTube from "react-youtube"
import usePlayersStore from "../store/players-store"

type Props = {
	index: number
	videoId: string
	offset: number
}

export const Video = (props: Props) => {
	const { index, videoId, offset } = props
	const { attachPlayer } = usePlayersStore((state) => state)

	const onPlayerReady: YouTubeProps["onReady"] = (event) => {
		attachPlayer(index)(event.target)
	}

	return (
		<YouTube
			videoId={videoId}
			onReady={onPlayerReady}
			opts={{
				height: "390",
				width: "640",
				playerVars: {
					controls: 0,
					disablekb: 1,
					modestbranding: 1,
					start: offset,
				},
			}}
		/>
	)
}
