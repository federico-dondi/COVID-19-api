export default interface DayOne {
  [index: number]: {
    Country: string
    CountryCode: string
    Province: string
    City: string
    CityCode: string
    Lat: string,
    Lon: string,
    Cases: number,
    Status: string
    Date: Date
  };
  length: number
}
