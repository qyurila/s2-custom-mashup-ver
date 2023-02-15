import Link from "next/link"
import { Play, Square, Plus } from "lucide-react"

export const Controls = () => (
	<div className="container flex flex-row items-center justify-center gap-4">
		<button className="flex h-12 w-12 items-center justify-center">
			<Square
				size={32}
				strokeLinecap="square"
				strokeLinejoin="miter"
				className="fill-gray-200 hover:fill-white"
			/>
		</button>
		<button className="flex h-16 w-16 items-center justify-center">
			<Play
				size={60}
				strokeLinecap="square"
				strokeLinejoin="miter"
				className="fill-gray-200 hover:fill-white"
				viewBox="-1 0 24 24"
			/>
		</button>
		<Link
			href="/select"
			className="flex h-12 w-12 items-center justify-center"
		>
			<Plus
				size={36}
				strokeWidth={3}
				strokeLinecap="square"
				strokeLinejoin="miter"
				className="stroke-gray-200 hover:stroke-white"
			/>
		</Link>
	</div>
)
