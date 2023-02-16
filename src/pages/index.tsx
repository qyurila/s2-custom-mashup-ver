import { type NextPage } from "next"
import Head from "next/head"
import { Video } from "../components/Video"
import { Controls } from "../components/Controls"
import videoList from "../data/video-list"
import { useState } from "react"
import type { YouTubePlayer, YouTubeProps } from "react-youtube"

const Home: NextPage = () => {
	const [isVideoSelected, setIsVideoSelected] = useState(
		videoList.map((version) => version.selectedByDefault)
	)
	const [playerList, setPlayerList] = useState<YouTubePlayer[]>([])

	const toggleVideo = (index: number) => {
		const newIsVideoSelected = [...isVideoSelected]
		newIsVideoSelected[index] = !newIsVideoSelected[index]
		setIsVideoSelected(newIsVideoSelected)
	}

	const updatePlayerList: YouTubeProps["onReady"] = (event) => {
		const newPlayerList = [...playerList, event.target]
		setPlayerList(newPlayerList)
	}

	const playPause = (isPlaying: boolean) => {
		playerList.map(async (player) =>
			isPlaying ? await player.pauseVideo() : await player.playVideo()
		)
	}

	const stopVideos = () => {
		playerList.map(async (player) => await player.stopVideo())
	}

	const videos = videoList
		.filter((_, index) => isVideoSelected[index])
		.map((version, index) => (
			<Video
				key={index}
				index={index}
				id={version.videoId}
				onReady={updatePlayerList}
			/>
		))

	return (
		<>
			<Head>
				<title>Create T3 App</title>
				<meta name="description" content="Generated by create-t3-app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="fixed flex min-h-screen w-screen flex-col items-center justify-center bg-black">
				<div className="container grid grid-cols-2 items-center justify-center justify-items-center px-4 py-16">
					{videos}
				</div>
				<Controls playPause={playPause} stopVideos={stopVideos} />
			</main>
		</>
	)
}

export default Home

/*
<SelectModal
onClose={() => setIsSelectModalOpen(false)}
isOpen={isSelectModalOpen}
isVideoSelected={isVideoSelected}
toggleVideo={(index: number) => toggleVideo(index)}
/>
*/
