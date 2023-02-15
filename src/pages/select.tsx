import { type NextPage } from "next"
import { Item } from "../components/Item"

const Select: NextPage = () => {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-black">
			<ul className="container -rotate-12 items-center justify-center justify-items-center px-4 py-16">
				<li className="flex flex-col items-center justify-center gap-4">
					<Item name="S2 합작버젼" />
					<Item name="S2 합작 노래방버젼" />
					<Item name="S2 합작 쇼츠버젼" />
					<Item name="S2 합작 바쁜 사람들을 위한버젼" />
					<Item name="S2 합작 감동버젼" />
				</li>
			</ul>
		</main>
	)
}

export default Select
