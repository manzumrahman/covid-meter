import React, { useEffect, useState } from 'react'
import "./css/Chart.css";

function Chart() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/countries")
            .then(response => response.json())
            .then(data => setData(data))
    }, [])

    return (
        <div>
            <div className="space"></div>
            <div className="chart-title"> Data on Chart </div>
            <div className="selector-container">
                <select name="worldwide" className="selector">
                    <option value="worldwide">Worldwide</option>
                    {data.map((country) => (
                        <option value={country.countryInfo.iso3}>{country.country}</option>
                    ))}
                </select>
            </div>

        </div>
    )
}

export default Chart
