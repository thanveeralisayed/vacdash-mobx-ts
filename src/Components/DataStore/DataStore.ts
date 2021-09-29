import { barChartItem } from "../Barchart/Barchar";
import { labelct } from "../Home/Home";
import { pieDataItem } from "../PieChart/PieChar";
import { DashBoardStore, state } from "../Store/DashBoardStore";





const TotalData = (dashBoardStore: DashBoardStore) => {
    const vacdata: labelct[] = [{
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

    ]

    const vaccineDist: pieDataItem[] = [
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
    ]

    const Gdist: pieDataItem[] = [
        {
            name: 'MALE',
            value: dashBoardStore.vaccination.male
        },
        {
            name: 'FEMALE',
            value: dashBoardStore.vaccination.female
        },
        {
            name: 'OTHERS',
            value: dashBoardStore.vaccination.others
        }

    ]

    const HosData: pieDataItem[] = [
        {
            name: 'GOVT',
            value: dashBoardStore.sessions.govt
        },
        {
            name: 'PVT',
            value: dashBoardStore.sessions.pvt
        }
    ]

    const statesBar: barChartItem[] = dashBoardStore.states.map((state: state): barChartItem => {
        const obj: barChartItem = {
            name: state.state_name,
            Dose2: state.totally_vaccinated,
            Dose1: state.partial_vaccinated,
            amt: state.partial_vaccinated,
        }
        return obj;
    })


    const totalVac = {
        vacdata,
        vaccineDist,
        Gdist,
        HosData,
        statesBar
    }

    return totalVac;
}


const todayVac = (dashBoardStore: DashBoardStore) => {
    const vacdata: labelct[] = [{
        label: 'TOTAL VACCINATIONS',
        count: dashBoardStore.vaccination.today
    },
    {
        label: 'DOSE 1',
        count: dashBoardStore.vaccination.today_dose_one
    },
    {
        label: 'DOSE 2',
        count: dashBoardStore.vaccination.today_dose_two
    },

    ]

    const Gdist: pieDataItem[] = [
        {
            name: 'MALE',
            value: dashBoardStore.vaccination.today_male
        },
        {
            name: 'FEMALE',
            value: dashBoardStore.vaccination.today_female
        },
        {
            name: 'OTHERS',
            value: dashBoardStore.vaccination.today_others
        }

    ]


    const statesBar: barChartItem[] = dashBoardStore.states.map((state: state): barChartItem => {
        const obj: barChartItem = {
            name: state.state_name,
            today:state.today
        }
        return obj;
    })


    const totalVac = {
        vacdata,
        Gdist,
        statesBar
    }

    return totalVac;
}






export { TotalData, todayVac }