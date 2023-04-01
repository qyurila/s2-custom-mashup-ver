import { Play, Square, Plus, Pause } from "lucide-react"
import usePlayersStore from "../store/players-store"

type Props = {
	openList: () => void
}

const Controls = ({ openList }: Props) => {
	const [isPlaying, setIsPlaying] = usePlayersStore((state) => [
		state.isPlaying,
		state.setIsPlaying,
	])

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

	const controlVideo = (action: "play" | "pause" | "stop") => {
		console.log(action)
	}

	const handlePlayClick = () => {
		if (isPlaying) {
			setIsPlaying(false)
			controlVideo("pause")
		} else {
			setIsPlaying(true)
			controlVideo("play")
		}

		setIsPlaying(!isPlaying)
	}

	return (
		<div className="container flex flex-row items-center justify-center gap-4">
			<button
				className="flex h-12 w-12 items-center justify-center"
				onClick={() => {
					setIsPlaying(false)
					controlVideo("stop")
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
				onClick={openList}
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

export default Controls
