import { DndContext, type DragEndEvent } from "@dnd-kit/core"
import {
	arraySwap,
	rectSwappingStrategy,
	SortableContext,
} from "@dnd-kit/sortable"
import { useEffect, useState } from "react"
import usePlayersStore from "../store/players-store"
import Player from "./Player"

const PlayerContainer = () => {
	const [videos, isPlaying] = usePlayersStore((state) => [
		state.videos,
		state.isPlaying,
	])
	const [sortItems, setSortItems] = useState<string[]>([
		...videos.map((video) => video.id),
	])

	useEffect(() => {
		setSortItems([...videos.map((video) => video.id)])
	}, [videos])

	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event
		if (!over || active.id === over.id) return

		const oldIndex = sortItems.indexOf(String(active.id))
		const newIndex = sortItems.indexOf(String(over.id))
		setSortItems(arraySwap(sortItems, oldIndex, newIndex))
	}

	const players = sortItems
		.map((id) => videos.find((video) => video.id === id))
		.map((video) => {
			if (!video) return

			return <Player key={video.id} {...video} />
		})

	return (
		<>
			<div
				className={`
					grid items-center justify-center px-4 py-16
					grid-cols-${Math.ceil(Math.sqrt(videos.length))}
					${isPlaying ? "opacity-0" : "opacity-100"}
				`}
			>
				<DndContext onDragEnd={handleDragEnd}>
					<SortableContext
						items={sortItems}
						strategy={rectSwappingStrategy}
					>
						{players}
					</SortableContext>
				</DndContext>
			</div>
		</>
	)
}

export default PlayerContainer
