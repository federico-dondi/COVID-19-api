import axios from 'axios'

import DefaultResponse from './interfaces/DefaultResponse'
import SummaryResponse from './interfaces/SummaryResponse'
import Country from './interfaces/Country'
import DayOne from './interfaces/DayOne'
import DayOneAllStatus from './interfaces/DayOneAllStatus'
import StatsResponse from './interfaces/StatsResponse'

export default class COVID19Api {
  private readonly api = axios.create({ baseURL: 'https://api.covid19api.com/' })

  async default (): Promise<DefaultResponse> {
    const res = await this.api.get(''); return res.data as DefaultResponse
  }

  async summary (): Promise<SummaryResponse> {
    const res = await this.api.get('summary'); return res.data as SummaryResponse
  }

  async countries (): Promise<Country[]> {
    const res = await this.api.get('countries'); return res.data as Country[]
  }

  async dayOne (country: string, status: string): Promise<DayOne[]> {
    const res = await this.api.get(`dayone/country/${country}/status/${status}`); return res.data as DayOne[]
  }

  async dayOneAllStatus (country: string): Promise<DayOneAllStatus[]> {
    const res = await this.api.get(`dayone/country/${country}`); return res.data as DayOneAllStatus[]
  }

  async dayOneTotal (country: string, status: string): Promise<DayOne[]> {
    const res = await this.api.get(`total/dayone/country/${country}/status/${status}`); return res.data as DayOne[]
  }

  async dayOneTotalAllStatus (country: string): Promise<DayOneAllStatus[]> {
    const res = await this.api.get(`total/dayone/country/${country}`); return res.data as DayOneAllStatus[]
  }

  async dayOneLive (country: string, status: string): Promise<DayOne[]> {
    const res = await this.api.get(`dayone/country/${country}/status/${status}/live`); return res.data as DayOne[]
  }

  async stats (): Promise<StatsResponse> {
    const res = await this.api.get('stats'); return res.data as StatsResponse
  }

  async version (): Promise<string> {
    const res = await this.api.get('version'); return res.data as string
  }
}
