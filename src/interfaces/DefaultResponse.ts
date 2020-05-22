interface Route {
  Name: string
  Description: string
  Path: string
}

export default interface DefaultResponse {
  'allRoute': Route,
  'countriesRoute': Route,
  'countryStatusDayOneLiveRoute': Route,
  'countryStatusDayOneRoute': Route,
  'countryStatusDayOneTotalRoute': Route,
  'countryStatusLiveRoute': Route,
  'countryStatusRoute': Route,
  'countryStatusTotalRoute': Route,
  'exportRoute': Route,
  'liveCountryStatusAfterDateRoute': Route,
  'liveCountryStatusRoute': Route,
  'summaryRoute': Route,
  'webhookRoute': Route,
}
