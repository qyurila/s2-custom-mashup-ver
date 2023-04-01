import { create } from "zustand"
import type { VideoInfo } from "../data/video-infos"
import videoInfos from "../data/video-infos"

export type SelectedVideo = {
	id: string
	info: VideoInfo
}

type PlayersState = {
	videos: SelectedVideo[]
	appendVideo: (id: string) => void
	removeVideo: (id: string) => void
}

const usePlayersStore = create<PlayersState>()((set) => ({
	videos: videoInfos
		.map((info, index) => ({
			id: String(index),
			info,
		}))
		.filter((video) => video.info.selectedByDefault),

	appendVideo: (id: string) => {
		const info = videoInfos[Number(id)]
		if (!info) return

		return set((state) => ({
			videos: [...state.videos, { id, info }],
		}))
	},

	removeVideo: (id: string) =>
		set((state) => ({
			videos: state.videos.filter((video) => video.id !== id),
		})),
}))

export default usePlayersStore
