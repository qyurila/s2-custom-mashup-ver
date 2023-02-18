import { arraySwap, useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import type { YouTubeProps } from "react-youtube"
import YouTube from "react-youtube"
import type { VideoInfo } from "../data/video-infos"
import usePlayersStore from "../store/players-store"

type Props = {
	id: number
	info: VideoInfo
}

export const Player = (props: Props) => {
	const { id, info } = props
	const attachPlayer = usePlayersStore((state) => state.attachPlayer)

	const sortable = useSortable({
		id,
		getNewIndex: ({ id, items, activeIndex, overIndex }) => {
			console.log("getNewIndex", id, items, activeIndex, overIndex)
			return arraySwap(items, activeIndex, overIndex).indexOf(id)
		},
	})

	const onPlayerReady: YouTubeProps["onReady"] = (event) => {
		attachPlayer(id, event.target)
	}

	return (
		<div
			className="relative"
			ref={sortable.setNodeRef}
			style={{
				transform: CSS.Transform.toString(sortable.transform),
				transition: sortable.transition,
			}}
			{...sortable.attributes}
			{...sortable.listeners}
		>
			<div className="absolute inset-0 z-10" />
			<YouTube
				videoId={info.id}
				onReady={onPlayerReady}
				opts={{
					playerVars: {
						controls: 0,
						disablekb: 1,
						fs: 0,
						iv_load_policy: 3,
						modestbranding: 1,
						start: info.offset,
					},
				}}
			/>
		</div>
	)
}
