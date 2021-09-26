import { Grid } from '@mui/material'
import React from 'react'
import Vaccination from '../Vaccination/Vaccination'
import {labelct} from "../Home/Home"

interface Props {
    List:labelct[];
}

export const Tab = (props: Props) => {
    const {List} = props;
    return (
        <Grid mt={2} container>
            {
                List.length > 0 ? List.map((item: labelct) =>
                    <Grid item md={4} xs={12} sm={12} style={{ cursor: 'pointer', textAlign: 'center' }}>
                        <Vaccination label={item.label} count={item.count} /></Grid>)

                    : ''
            }
        </Grid>
    )
}
