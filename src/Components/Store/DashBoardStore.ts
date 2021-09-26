import axios from "axios";
import { observable, action, reaction } from "mobx";
import { createContext } from "react";

type result = any;

export interface sites {
  "total": number,
  "govt": number,
  "pvt": number,
  "today": number | null
}

export interface sessions {
  "total": number,
  "govt": number,
  "pvt": number,
  "today": null | number
}

export interface vaccination {
  "total": number,
  "male": number,
  "female": number,
  "others": number,
  "covishield": number,
  "covaxin": number,
  "sputnik": number,
  "today": number,
  "tot_dose_1": number,
  "tot_dose_2": number,
  "total_doses": number,
  "today_dose_one": number,
  "today_dose_two": number,
  "today_male": number,
  "today_female": number,
  "today_others": number,
  "today_aefi": number,
  "aefi": number,
  "yesterday_vac": number,
  "yesterday_dose_one": number,
  "yesterday_dose_two": number
}

export interface state {
  "state_id": string,
  "id": string,
  "title": string,
  "state_name": string,
  "total": number,
  "partial_vaccinated": number,
  "totally_vaccinated": number,
  "today": number
}


class DashBoardStore {


  @observable topBlock: result;
  @observable sites: sites = {} as sites;
  @observable sessions: sessions = {} as sessions;
  @observable vaccination: vaccination = {} as vaccination;
  @observable states: state[] = [{} as state];
  

  @action getData = async (callBack:React.Dispatch<React.SetStateAction<boolean>>) => {
    await axios.get('https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=&district_id=&date=2021-09-24/topBlock')
      .then(resp => {
        this.topBlock = resp.data.topBlock; 
        this.states = resp.data.getBeneficiariesGroupBy;
      }).then(() => {
        this.sites = this.topBlock.sites;
        this.sessions = this.topBlock.sessions;
        this.vaccination = this.topBlock.vaccination;    
      }).then(()=>callBack(false));
  }


}


export default createContext(new DashBoardStore());