import type { YouTubePlayer } from "react-youtube"
import { create } from "zustand"
import videoList from "../data/video-list"

type SelectedVideo = {
	order: number
	videoId: string
	player?: YouTubePlayer
}

type PlayersState = {
	videos: SelectedVideo[]
	appendVideo: (order: number, videoId: string) => void
	removeVideo: (order: number) => void
	attachPlayer: (order: number) => (player: YouTubePlayer) => void
}

const usePlayersStore = create<PlayersState>()((set) => ({
	videos: videoList
		.filter((video) => video.selectedByDefault)
		.map((video, index) => ({
			order: index,
			videoId: video.videoId,
			player: undefined,
		})),

	appendVideo: (order: number, videoId: string) =>
		set((state) => ({
			videos: [...state.videos, { order, videoId, player: undefined }],
		})),

	removeVideo: (order: number) =>
		set((state) => ({
			videos: state.videos.filter((player) => player.order !== order),
		})),

	attachPlayer: (order: number) => (player: YouTubePlayer) =>
		set((state) => ({
			videos: state.videos.map((video) =>
				video.order === order ? { ...video, player } : video
			),
		})),
}))

export default usePlayersStore
