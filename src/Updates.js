import React, {useEffect, useState} from 'react'
import './css/Updates.css'


function Updates() {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/all")
        .then(response => response.json())
        .then(data => setData(data))
    }, [])
    return (
        <div>
            <div className="container-title">Worldwide</div>
            <div className="container">
                <div className="card">
                    <div className="title blue">Cases</div>
                    <div className="stat">+{data.todayCases}</div>
                    <div className="total"><b>Total:</b>{data.cases}</div>
                </div>
                <div className="card">
                    <div className="title green">Recovered</div>
                    <div className="stat">+{data.todayRecovered}</div>
                    <div className="total"><b>Total:</b>{data.recovered}</div>
                </div>
                <div className="card">
                    <div className="title red">Deaths</div>
                    <div className="stat">+{data.todayDeaths}</div>
                    <div className="total"><b>Total:</b>{data.deaths}</div>
                </div>
            </div>
        </div>
    )
}

export default Updates
