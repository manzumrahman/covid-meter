import React, { useState, useEffect } from 'react'
import './css/CountrywiseTable.css'

function CountrywiseTable() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/countries")
            .then(response => response.json())
            .then(data => data.sort((a, b) => (a.cases < b.cases ? 1 : -1)))
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <div className="container-title">Countrywise</div>
            <div className="space"></div>
            <table>
                <tr>
                    <th>Flag</th>
                    <th>Country</th>
                    <th>New Cases</th>
                    <th>Total Cases</th>
                    <th>New Recoveries</th>
                    <th>Total Recoveries</th>
                    <th>New Deaths</th>
                    <th>Total Deaths</th>
                    <th>Active Cases</th>
                    <th>Critical Cases</th>
                    <th>Population</th>
                    <th>Continent</th>
                </tr>
                {data.map((element) => (
                    <tr>
                        <td><img src={element.countryInfo.flag} alt="" height="25px" width="50px"/></td>
                        <td>{element.country}</td>
                        <td>{element.todayCases}</td>
                        <td>{element.cases}</td>
                        <td>{element.todayRecovered}</td>
                        <td>{element.recovered}</td>
                        <td>{element.todayDeaths}</td>
                        <td>{element.deaths}</td>
                        <td>{element.active}</td>
                        <td>{element.critical}</td>
                        <td>{element.population}</td>
                        <td>{element.continent}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default CountrywiseTable
