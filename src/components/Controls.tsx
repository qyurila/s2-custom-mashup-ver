import { Play, Square, Plus, Pause } from "lucide-react"
import { useState } from "react"
import usePlayersStore from "../store/players-store"

type Props = {
	openSelect: () => void
}

export const Controls = ({ openSelect }: Props) => {
	const [isPlaying, setIsPlaying] = useState(false)
	const videos = usePlayersStore((state) => state.videos)

	const playIcon = isPlaying ? (
		<Pause
			size={48}
			className="fill-gray-200 stroke-white stroke-0 hover:fill-white"
		/>
	) : (
		<Play
			size={60}
			className="fill-gray-200 hover:fill-white"
			strokeLinecap="square"
			strokeLinejoin="miter"
			viewBox="-1 0 24 24"
		/>
	)

	const controlVideos = (action: "play" | "pause" | "stop") => {
		videos.map(async (video) => {
			if (!video.player) return
			await video.player[`${action}Video`]()
		})
	}

	const handlePlayClick = () => {
		if (isPlaying) {
			setIsPlaying(false)
			controlVideos("pause")
		} else {
			setIsPlaying(true)
			controlVideos("play")
		}

		setIsPlaying(!isPlaying)
	}

	return (
		<div className="container flex flex-row items-center justify-center gap-4">
			<button
				className="flex h-12 w-12 items-center justify-center"
				onClick={() => {
					setIsPlaying(false)
					controlVideos("stop")
				}}
			>
				<Square size={32} className="fill-gray-200 hover:fill-white" />
			</button>
			<button
				className="flex h-16 w-16 items-center justify-center"
				onClick={handlePlayClick}
			>
				{playIcon}
			</button>
			<button
				className="flex h-12 w-12 items-center justify-center"
				onClick={openSelect}
			>
				<Plus
					size={36}
					className="stroke-gray-200 stroke-[3] hover:stroke-white"
					strokeLinecap="square"
				/>
			</button>
		</div>
	)
}
