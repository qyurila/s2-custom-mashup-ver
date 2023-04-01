import { type AppType } from "next/dist/shared/lib/utils"
import localFont from "@next/font/local"

import "../styles/globals.css"

const pureunJeonnamBold = localFont({
	src: "../../public/fonts/PureunJeonnam-Bold.woff2",
	variable: "--font-pureun-jeonnam-bold",
})

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<main className={`${pureunJeonnamBold.variable}`}>
			<Component {...pageProps} />
		</main>
	)
}

export default MyApp
