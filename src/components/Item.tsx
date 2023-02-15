type Props = {
	name: string
}

export const Item = ({ name }: Props) =>
	false ? (
		<button className="font-display text-8xl text-white">{name}</button>
	) : (
		<button
			className="relative h-[0.75em] -skew-x-6 whitespace-nowrap font-display text-4xl leading-tight text-stroke
				after:absolute after:-my-[0.04em] after:ml-[0.5em] after:font-sans after:leading-none after:text-white hover:after:content-['◀']
				lg:text-6xl lg:leading-tight 2xl:text-8xl 2xl:leading-tight"
		>
			{name}
		</button>
	)
