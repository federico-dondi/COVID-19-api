export default interface SummaryResponse {
  Global: {
    NewConfirmed: number
    TotalConfirmed: number
    NewDeaths: number
    TotalDeaths: number
    NewRecovered: number
    TotalRecovered: number
  };
  Countries: [{
    Country: string
    CountryCode:string
    Slug: string
    NewConfirmed: number
    TotalConfirme: number
    NewDeaths: number
    TotalDeaths: number
    NewRecovered: number
    TotalRecovered: number
    Date: Date
  }];
}
