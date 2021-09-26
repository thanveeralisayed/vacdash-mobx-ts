import React, { useState, useContext, useEffect, useLayoutEffect } from 'react';
import DashBoardStore from "../Store/DashBoardStore";
import { Observer } from "mobx-react-lite";
import Vaccination from '../Vaccination/Vaccination';
import { vaccination, state } from "../Store/DashBoardStore";
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Zoom from '@mui/material/Zoom';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button, ButtonGroup, Grid, Paper, Tabs } from '@mui/material';
import { Tab } from '../Tab/Tab';
import { PieChar, pieDataItem } from '../PieChart/PieChar';






interface Props {

}

export type labelct = {
    label: string,
    count: number
}





const Home = (props: Props) => {
    const dashBoardStore = useContext(DashBoardStore);
    const [loading, setLoading] = useState(true);
    const [List, setList] = useState<labelct[]>([] as labelct[]);
    const [tabState, setTabState] = React.useState<JSX.Element | "" | string>();
    const [checked, setChecked] = React.useState(0);
    const [pieVData, setpieVData] = useState<pieDataItem[]>([] as pieDataItem[]);


    const handleChange = (val: number) => {
        setChecked(val);
    }

    const SetTabs = () => {
        console.log(checked);
        const TabView = checked === 1 ?
            <Tab List={List} pieVData={pieVData} /> :
            checked === 2 ?
                'TODAY DATA SOON' :
                checked === 3 ?
                    'LAST 7 DAYS DATA SOON' :
                    '';
        console.log(TabView);
        setTabState(TabView);
    }

    useEffect(() => {
        setLoading(true);
        dashBoardStore.getData(setLoading);
    }, [])

    useEffect(() => {
        if (!loading) {
            setList([...List, {
                label: 'TOTAL VACCINATIONS',
                count: dashBoardStore.vaccination.total
            },
            {
                label: 'DOSE 1',
                count: dashBoardStore.vaccination.tot_dose_1
            },
            {
                label: 'DOSE 2',
                count: dashBoardStore.vaccination.tot_dose_2
            },

            ])

            setpieVData([...pieVData,
            {
                name: 'COVISHIELD',
                value: dashBoardStore.vaccination.covishield
            },
            {
                name: 'COVAXINE',
                value: dashBoardStore.vaccination.covaxin
            },
            {
                name: 'SPUTNIK',
                value: dashBoardStore.vaccination.sputnik
            },
            ])

            setChecked(1);

        }



    }, [loading])

    useEffect(() => {
        if (!loading) {
            console.log('set tabs');

            SetTabs();
        }
    }, [checked, loading])





    return (
        <div style={{ textAlign: 'center', marginTop: '14px' }}>
            <ButtonGroup color="secondary" fullWidth variant="outlined" aria-label="outlined button group">
                <Button color={checked === 1 ? 'success' : 'secondary'} onClick={() => handleChange(1)}>TOTAL</Button>
                <Button color={checked === 2 ? 'success' : 'secondary'} onClick={() => handleChange(2)}>TODAY</Button>
                <Button color={checked === 3 ? 'success' : 'secondary'} onClick={() => handleChange(3)}>LAST 7 DAYS</Button>
            </ButtonGroup>
            <Box mt={5}>
                {
                    tabState !== "" && tabState !== undefined ? tabState : ''
                }
            </Box>
            
        </div>
    )
}

export default Home;
