import { arraySwap, useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import type { VideoInfo } from "../data/video-infos"
import Image from "next/image"

type Props = {
	id: string
	info: VideoInfo
}

export const Player = (props: Props) => {
	const { id, info } = props

	const sortable = useSortable({
		id,
		getNewIndex: ({ id, items, activeIndex, overIndex }) => {
			return arraySwap(items, activeIndex, overIndex).indexOf(id)
		},
	})

	return (
		<div
			className="group relative flex items-center justify-center active:z-10"
			ref={sortable.setNodeRef}
			style={{
				transform: CSS.Transform.toString(sortable.transform),
				transition: sortable.transition,
			}}
			{...sortable.attributes}
			{...sortable.listeners}
		>
			<div
				className="
					absolute inset-0 bg-black opacity-0 transition-opacity duration-150
					group-hover:opacity-40 group-active:opacity-60
				"
			/>
			<h4
				className="
					absolute text-center font-caption text-xl text-white opacity-0 transition duration-75
					group-hover:opacity-100 group-active:opacity-0 md:text-2xl lg:text-3xl 2xl:text-4xl
				"
			>
				{info.title.split("S2 합작 ")}
			</h4>
			<Image
				src={`https://img.youtube.com/vi/${info.id}/maxresdefault.jpg`}
				alt={info.title}
				width={1280}
				height={720}
			/>
		</div>
	)
}
