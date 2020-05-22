import axios from 'axios'

import DefaultResponse from './interfaces/DefaultResponse'
import SummaryResponse from './interfaces/SummaryResponse'
import Country from './interfaces/Country'
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

  async stats (): Promise<StatsResponse> {
    const res = await this.api.get('stats'); return res.data as StatsResponse
  }

  async version (): Promise<string> {
    const res = await this.api.get('version'); return res.data as string
  }
}
