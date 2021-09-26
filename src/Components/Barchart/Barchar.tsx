import { Box } from '@mui/system';
import React from 'react'
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
} from 'recharts';

export interface barChartItem {
    name: string,
    Dose2: number,
    Dose1: number,
    amt: number,
}

interface Props {
    barData?: barChartItem[];
}



const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export const Barchar = (props: Props) => {
    return (
        <ResponsiveContainer width="100%"  aspect={.3}>
            <BarChart
                width={800}
                height={1500}
                layout="vertical"
                data={props.barData}
                stackOffset="sign"
                barCategoryGap={10}
                margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
            >
                <CartesianGrid strokeDasharray="1 1" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" width={200} />
                <Tooltip />
                <Legend />
                <ReferenceLine x={0} stroke="#000" />
                <Bar dataKey="Dose1" fill="#8884d8" stackId="stack" />
                <Bar dataKey="Dose2" fill="#82ca9d" stackId="stack" />
            </BarChart>
        </ResponsiveContainer>
    )
}
