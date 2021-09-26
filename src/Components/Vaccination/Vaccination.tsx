import { Box } from '@mui/system';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { vaccination } from "../Store/DashBoardStore"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Props {
    count: number;
    label: string;
}

const Vaccination = (props: Props) => {







    return (
        <>

            <Card variant="outlined">
                <CardContent>

                    <Button variant="outlined">
                        <Typography variant="h3" component="div">
                            {props.count}
                        </Typography>
                    </Button>

                    <Typography variant="h5" component="div">
                        {props.label}
                    </Typography>
                </CardContent>
                {/* <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions> */}
            </Card>


        </>
    )
}

export default observer(Vaccination);
