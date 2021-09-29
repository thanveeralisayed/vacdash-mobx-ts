import { Grid, Box } from '@mui/material'
import React, { useContext } from 'react'
import Vaccination from '../Vaccination/Vaccination'
import { labelct } from "../Home/Home"
import { PieChar, pieDataItem } from '../PieChart/PieChar'
import { Barchar, barChartItem } from '../Barchart/Barchar'
import DashBoardStore from "../Store/DashBoardStore"

interface Props {
    List: labelct[];
    pieVData?: pieDataItem[];
    pieGdata?: pieDataItem[];
    barSdata: barChartItem[];
    PieHdata?: pieDataItem[];
}

export const Tab = (props: Props) => {
    const { List } = props;

    const dashBoardStore = useContext(DashBoardStore);
    const total = <Grid item md={4} xs={12} sm={12} style={{ cursor: 'pointer', textAlign: 'center' }}>
                            <PieChar piData={props.pieVData} />
                    </Grid>

    const gender = <Grid item md={4} xs={12} sm={12} style={{ cursor: 'pointer', textAlign: 'center' }}>
                            <PieChar piData={props.pieGdata} />
                    </Grid>

    
    const hospitals = <Grid item md={4} xs={12} sm={12} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                <PieChar piData={props.PieHdata} />
                            </Grid>

    const states = <Barchar barData={props.barSdata}  />                        

    return (
        <div>
            <Grid mt={2} container>
                {
                    List.length > 0 ? List.map((item: labelct,index:number) =>
                        <Grid key={index} item md={4} xs={12} sm={12} style={{ cursor: 'pointer', textAlign: 'center' }}>
                            <Vaccination label={item.label} count={item.count} /></Grid>)

                        : ''
                }
            </Grid>
            <Grid mt={1} container>
                {props.pieVData? total:''}
                {props.pieGdata? gender:''}
                {props.PieHdata? hospitals:''}

            </Grid>
            <Box width="100%" >
                {props.barSdata? states:''}
            </Box>

        </div>
    )
}
