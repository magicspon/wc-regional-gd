import React from 'react'
import { Sector, PieChart, Pie, Cell } from 'recharts'
import * as R from 'ramda'

const data = [
	{ name: 'Group A', value: 400 },
	{ name: 'Group B', value: 300 },
	{ name: 'Group C', value: 300 },
	{ name: 'Group D', value: 200 }
]
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const RADIAN = Math.PI / 180

export const Goal = ({
	cx,
	cy,
	red,
	green,
	grey,
	inner = 40,
	outer = 60,
	scale = 1
}) => (
	<g>
		<Sector
			cx={cx}
			cy={cy}
			innerRadius={inner * scale}
			outerRadius={outer * scale}
			startAngle={0}
			endAngle={green}
			fill={'#79AC3D'}
		/>
		<Sector
			cx={cx}
			cy={cy}
			innerRadius={inner * scale}
			outerRadius={outer * scale}
			startAngle={green}
			endAngle={green + red}
			fill={'#DB3750'}
		/>
		<Sector
			cx={cx}
			cy={cy}
			innerRadius={inner * scale}
			outerRadius={outer * scale}
			startAngle={green + red}
			endAngle={360}
			fill={'#343B54'}
		/>
		<line
			x1={cx}
			y1={cy + 60}
			x2={cx}
			y2={cy + 120}
			stroke="white"
			strokeWidth={2}
		/>
	</g>
)

export const ScatterItem = ({ x, y, region, wins, draws, loss }) => {
	const games = R.sum([wins, loss, draws])

	const green = 360 * (wins / games)
	const red = 360 * (loss / games)
	const grey = 360 * (draws / games)

	return (
		<g className="cell">
			<circle fill={'#fff'} cx={x} cy={y} r={60} />
			<text x={x} y={y} dy={4} textAnchor="middle" fill={'#000'}>
				{region}
			</text>

			<Goal cx={x} cy={y} red={red} green={green} grey={grey} />
		</g>
	)
}
