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
	const attachPlayer = usePlayersStore((state) => state.attachPlayer)

	const onPlayerReady: YouTubeProps["onReady"] = (event) => {
		attachPlayer(index)(event.target)
	}

	return (
		<YouTube
			videoId={videoId}
			onReady={onPlayerReady}
			opts={{
				playerVars: {
					controls: 0,
					disablekb: 1,
					fs: 0,
					iv_load_policy: 3,
					modestbranding: 1,
					start: offset,
				},
			}}
		/>
	)
}
