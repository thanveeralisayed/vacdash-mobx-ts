import { Grid } from '@mui/material'
import React from 'react'
import Vaccination from '../Vaccination/Vaccination'
import { labelct } from "../Home/Home"
import { PieChar, pieDataItem } from '../PieChart/PieChar'
import { Barchar, barChartItem } from '../Barchart/Barchar'

interface Props {
    List: labelct[];
    pieVData?: pieDataItem[];
    pieGdata?: pieDataItem[];
    barSdata?: barChartItem[];
}

export const Tab = (props: Props) => {
    const { List } = props;
    return (
        <div>
            <Grid mt={2} container>
                {
                    List.length > 0 ? List.map((item: labelct) =>
                        <Grid item md={4} xs={12} sm={12} style={{ cursor: 'pointer', textAlign: 'center' }}>
                            <Vaccination label={item.label} count={item.count} /></Grid>)

                        : ''
                }
            </Grid>
            <Grid mt={1} container>
                <Grid item md={4} xs={12} sm={12} style={{ cursor: 'pointer', textAlign: 'center' }}>
                    <PieChar piData={props.pieVData} />
                </Grid>
                <Grid item md={4} xs={12} sm={12} style={{ cursor: 'pointer', textAlign: 'center' }}>
                    <PieChar piData={props.pieGdata} />
                </Grid>
            </Grid>
            <Grid mt={1} container>
               <Barchar barData={props.barSdata} />
            </Grid>

        </div>
    )
}
