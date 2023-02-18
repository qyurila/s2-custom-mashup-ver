import { DndContext, type DragEndEvent } from "@dnd-kit/core"
import {
	arraySwap,
	rectSwappingStrategy,
	SortableContext,
} from "@dnd-kit/sortable"
import { useCallback, useState } from "react"
import usePlayersStore from "../store/players-store"
import { Player } from "./Player"

type Props = {
	isVisible: boolean
}

const PlayerContainer = (props: Props) => {
	const videos = usePlayersStore(useCallback((state) => state.videos, []))
	const [sortItems, setSortItems] = useState<number[]>([
		...videos.map((video) => video.id),
	])

	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event
		if (!over || active.id === over.id) return

		const oldIndex = sortItems.indexOf(Number(active.id))
		const newIndex = sortItems.indexOf(Number(over.id))
		setSortItems(arraySwap(sortItems, oldIndex, newIndex))
	}

	const players = sortItems
		.map((id) => videos.find((video) => video.id === id))
		.map((video) => {
			if (!video) return

			return <Player key={video.id} {...video} />
		})

	// TODO: Reimplement DnD without sortable (and grid).
	// Sortable makes rerendering inevitable. Tried memoizing Player, but it didn't help.
	return (
		<>
			{props.isVisible && (
				<div className="grid grid-cols-2 items-center justify-center px-4 py-16">
					<DndContext onDragEnd={handleDragEnd}>
						<SortableContext
							items={sortItems}
							strategy={rectSwappingStrategy}
						>
							{players}
						</SortableContext>
					</DndContext>
				</div>
			)}
		</>
	)
}
export default PlayerContainer
