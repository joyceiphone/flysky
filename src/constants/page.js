import Login from '../components/Login';
import DashBoard from '../components/Dashboard';

export const pages = [
    {
        path: '/', 
        component: Login,
        isExact: true,
    },
    {
        path: '/dashboard',
        component: DashBoard,
        isExact: true
    }
]

export const majorCityAirports = [
    {
        airport: 'Hartsfield-Jackson International Airport',
        code: 'ATL',
        cities: 'Atlanta',
        icao: 'KATL'
    },
    {
        airport: 'Amsterdam Airport Schiphol',
        code: 'AMS',
        cities: 'Amsterdam',
        icao: 'EHAM'
    },
    {
        airport: 'Heathrow Airport',
        code: 'LHR',
        cities: 'London',
        icao: 'EGLL'
    },
    {
        airport: "O'Hare Internatioanl Airport",
        code: 'ORD',
        cities: 'Chicago',
        icao: 'KORD'
    },
    {
        airport: 'Los Angeles International Airport',
        code: 'LAX',
        cities: 'Los Angeles',
        icao: 'KLAX'
    },
    {
        airport: 'Los Angeles International Airport',
        code: 'LAX',
        cities: 'Los Angeles',
        icao: 'KLAX'
    },
    {
        airport: 'Los Angeles International Airport',
        code: 'LAX',
        cities: 'Los Angeles',
        icao: 'KLAX'
    },
    {
        airport: 'Los Angeles International Airport',
        code: 'LAX',
        cities: 'Los Angeles',
        icao: 'KLAX'
    },
    {
        airport: 'Los Angeles International Airport',
        code: 'LAX',
        cities: 'Los Angeles',
        icao: 'KLAX'
    },
    {
        airport: 'Los Angeles International Airport',
        code: 'LAX',
        cities: 'Los Angeles',
        icao: 'KLAX'
    }
]
