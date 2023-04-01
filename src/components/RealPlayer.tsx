import { useEffect, useState } from "react"
import YouTube from "react-youtube"
import Splash from "./Splash"

type Props = {
	width: number
}

const RealPlayer = (props: Props) => {
	const width = props.width

	const [isSplashOn, setIsSplashOn] = useState(true)

	const splashTimer = setTimeout(() => {
		setIsSplashOn(false)
	}, 2000)

	useEffect(() => {
		return () => {
			clearTimeout(splashTimer)
		}
	}, [splashTimer])

	return (
		<>
			<Splash isSplashOn={isSplashOn} />
			{!isSplashOn && (
				<YouTube
					className="absolute pb-16"
					videoId="xlF_VsTkc60"
					opts={{
						width,
						height: (width * 9) / 16,
						playerVars: {
							autoplay: 1,
							controls: 0,
							fs: 0,
							iv_load_policy: 3,
							modestbranding: 1,
							start: 4,
						},
					}}
				/>
			)}
		</>
	)
}

export default RealPlayer
