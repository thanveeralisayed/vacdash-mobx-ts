import React, { useState, useContext, useEffect, useLayoutEffect } from 'react';
import DashBoardStore from "../Store/DashBoardStore";
import Box from '@mui/material/Box';
import { Button, ButtonGroup} from '@mui/material';
import { Tab } from '../Tab/Tab';
import { todayVac, TotalData } from '../DataStore/DataStore';




interface Props {

}

export type labelct = {
    label: string,
    count: number
}





const Home = (props: Props) => {
    const dashBoardStore = useContext(DashBoardStore);
    const [loading, setLoading] = useState(true);
    const [tabState, setTabState] = React.useState<JSX.Element | "" | string>();
    const [checked, setChecked] = React.useState(0);
    

    const handleChange = (val: number) => {
        setChecked(val);
    }

    const SetTabs = () => {
        const totalData = TotalData(dashBoardStore);
        const todayData = todayVac(dashBoardStore);
        
        const TabView = checked === 1 ?
            <>
            <Tab List={totalData.vacdata}  pieVData={totalData.vaccineDist} pieGdata={totalData.Gdist} barSdata={totalData.statesBar} PieHdata={totalData.HosData} /></> :
            checked === 2 ?
            <>
            <Tab List={todayData.vacdata} barSdata={todayData.statesBar} pieGdata={todayData.Gdist} /> </>:
                checked === 3 ?
                    'LAST 7 DAYS DATA SOON' :
                    '';
        setTabState(TabView);
    }

    useEffect(() => {
        setLoading(true);
        dashBoardStore.getData(setLoading);
    }, [])

    useEffect(() => {
        if (!loading) {
            setChecked(1);

        }



    }, [loading])

    useEffect(() => {
        if (!loading) {

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
