import type { YouTubePlayer } from "react-youtube"
import { create } from "zustand"
import type { VideoInfo } from "../data/video-infos"
import videoInfos from "../data/video-infos"

export type SelectedVideo = {
	id: number
	info: VideoInfo
	player?: YouTubePlayer
}

type PlayersState = {
	videos: SelectedVideo[]
	appendVideo: (id: number) => void
	removeVideo: (id: number) => void
	attachPlayer: (id: number, player: YouTubePlayer) => void
}

const usePlayersStore = create<PlayersState>()((set) => ({
	videos: videoInfos
		.map((info, index) => ({
			id: index + 1,
			info,
		}))
		.filter((video) => video.info.selectedByDefault),

	appendVideo: (id: number) => {
		const info = videoInfos[id - 1]
		if (!info) return

		return set((state) => ({
			videos: [...state.videos, { id, info }],
		}))
	},

	removeVideo: (id: number) =>
		set((state) => ({
			videos: state.videos.filter((video) => video.id !== id),
		})),

	attachPlayer: (id: number, player: YouTubePlayer) =>
		set((state) => ({
			videos: state.videos.map((video) =>
				video.id === id ? { ...video, player } : video
			),
		})),
}))

export default usePlayersStore
