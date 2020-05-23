import axios from 'axios'

import DefaultResponse from './interfaces/DefaultResponse'
import SummaryResponse from './interfaces/SummaryResponse'

import CountryDetails from './interfaces/CountryDetails'

import SingleStatusResponse from './interfaces/SingleStatusResponse'
import MultipleStatusResponse from './interfaces/MultipleStatusResponse'

import StatsResponse from './interfaces/StatsResponse'

export default class COVID19Api {
  private readonly api = axios.create({ baseURL: 'https://api.covid19api.com/' })

  async default (): Promise<DefaultResponse> {
    const res = await this.api.get(''); return res.data as DefaultResponse
  }

  async summary (): Promise<SummaryResponse> {
    const res = await this.api.get('summary'); return res.data as SummaryResponse
  }

  async countries (): Promise<CountryDetails[]> {
    const res = await this.api.get('countries'); return res.data as CountryDetails[]
  }

  async dayOne (country: string, status: string): Promise<SingleStatusResponse[]> {
    const res = await this.api.get(`dayone/country/${country}/status/${status}`); return res.data as SingleStatusResponse[]
  }

  async dayOneAllStatus (country: string): Promise<MultipleStatusResponse[]> {
    const res = await this.api.get(`dayone/country/${country}`); return res.data as MultipleStatusResponse[]
  }

  async dayOneTotal (country: string, status: string): Promise<SingleStatusResponse[]> {
    const res = await this.api.get(`total/dayone/country/${country}/status/${status}`); return res.data as SingleStatusResponse[]
  }

  async dayOneTotalAllStatus (country: string): Promise<MultipleStatusResponse[]> {
    const res = await this.api.get(`total/dayone/country/${country}`); return res.data as MultipleStatusResponse[]
  }

  async dayOneLive (country: string, status: string): Promise<SingleStatusResponse[]> {
    const res = await this.api.get(`dayone/country/${country}/status/${status}/live`); return res.data as SingleStatusResponse[]
  }

  async byCountry (country: string, status: string, from: Date, to :Date): Promise<SingleStatusResponse[]> {
    const res = await this.api.get(`country/${country}/status/${status}?from=${from}&to=${to}`); return res.data as SingleStatusResponse[]
  }

  async byCountryAllStatus (country: string, from: Date, to :Date): Promise<MultipleStatusResponse[]> {
    const res = await this.api.get(`country/${country}?from=${from}&to=${to}`); return res.data as MultipleStatusResponse[]
  }

  async byCountryTotal (country: string, status: string, from: Date, to :Date): Promise<SingleStatusResponse[]> {
    const res = await this.api.get(`total/country/${country}/status/${status}?from=${from}&to=${to}`); return res.data as SingleStatusResponse[]
  }

  async byCountryTotalAllStatus (country: string, from: Date, to: Date): Promise<MultipleStatusResponse[]> {
    const res = await this.api.get(`total/country/${country}?from=${from}&to=${to}`); return res.data as MultipleStatusResponse[]
  }

  async byCountryLive (country: string, status: string, from: Date, to: Date): Promise<SingleStatusResponse[]> {
    const res = await this.api.get(`country/${country}/status/${status}/live?from=${from}&to=${to}`); return res.data as SingleStatusResponse[]
  }

  async liveByCountry (country: string, status: string): Promise<SingleStatusResponse[]> {
    const res = await this.api.get(`live/country/${country}/status/${status}`); return res.data as SingleStatusResponse[]
  }

  async liveByCountryAllStatus (country: string): Promise<MultipleStatusResponse[]> {
    const res = await this.api.get(`live/country/${country}`); return res.data as MultipleStatusResponse[]
  }

  async liveByCountryAndStatusAfterDate (country: string, status: string, after: Date): Promise<SingleStatusResponse[]> {
    const res = await this.api.get(`live/country/${country}/status/${status}/date/${after}`); return res.data as SingleStatusResponse[]
  }

  async stats (): Promise<StatsResponse> {
    const res = await this.api.get('stats'); return res.data as StatsResponse
  }

  async version (): Promise<string> {
    const res = await this.api.get('version'); return res.data as string
  }
}
