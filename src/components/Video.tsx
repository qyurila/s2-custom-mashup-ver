import type { YouTubeProps } from "react-youtube"
import YouTube from "react-youtube"

type Props = {
	index: number
	id: string
	onReady: YouTubeProps["onReady"]
}

export const Video = (props: Props) => {
	return (
		<YouTube
			videoId={props.id}
			onReady={props.onReady}
			opts={{
				height: "390",
				width: "640",
				playerVars: {
					controls: 0,
					disablekb: 1,
					modestbranding: 1,
					start: 0,
				},
			}}
		/>
	)
}
