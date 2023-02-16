import { Play, Square, Plus, Pause } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

type Props = {
	controlVideos: (action: "play" | "pause" | "stop") => () => void
}

export const Controls = ({ controlVideos }: Props) => {
	const [isPlaying, setIsPlaying] = useState(false)
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
			<Link
				className="flex h-12 w-12 items-center justify-center"
				href={`/select`}
			>
				<Plus
					size={36}
					className="stroke-gray-200 stroke-[3] hover:stroke-white"
					strokeLinecap="square"
				/>
			</Link>
		</div>
	)
}
