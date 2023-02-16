type Props = {
	name: string
	selectedByDefault?: boolean
	isSelectable?: boolean
	handleClick: () => void
}

export const Item = ({
	name,
	selectedByDefault,
	isSelectable = true,
	handleClick,
}: Props) => {
	const isSelected = selectedByDefault ?? false

	return (
		<button
			className={`relative h-[0.75em] -skew-x-6 whitespace-nowrap font-display text-4xl leading-tight
				${
					isSelectable
						? "text-stroke-white hover:after:content-['◀']"
						: "opacity-25 text-stroke"
				}
				${isSelectable && isSelected ? "text-white" : "text-stroke"}
				after:absolute after:-my-[0.04em] after:ml-[0.5em] after:font-sans after:leading-none after:text-white
				lg:text-6xl lg:leading-tight 2xl:text-8xl 2xl:leading-tight`}
			onClick={handleClick}
		>
			{name}
		</button>
	)
}
