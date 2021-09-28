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
    name?: string;
    Dose2?: number;
    Dose1?: number;
    amt?: number;
    today?:number;
}

interface Props {
    barData?: barChartItem[];
    today?:boolean;
}




export const Barchar = (props: Props) => {
    return (
        <ResponsiveContainer width="100%" aspect={.3}>
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
