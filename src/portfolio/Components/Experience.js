import React from 'react'
import './job.css'
export default function Experience() {
    return (
        <div >
        <div className='jobCard'>
            <div className="imageContainer">
                <img width='100%' height='250%' src="https://media-exp1.licdn.com/dms/image/C510BAQHrSkQHNWxM-Q/company-logo_200_200/0/1570475327627?e=2147483647&v=beta&t=4SLl06H6wUQMsTgwA3HixEPikgwBJoB12xd0wK5oNbk" />
            </div>
            <div className='detailContainer'>
                <h3 className='jobHeading'>SDE Intern @ Simulas</h3>
                <p className='timePeriod'>May 2022 - July 2022 , virtual (work from home) </p>
                <p className='details'>
                    <li>Developed and integrated Backend api modules using nodejs and express</li>
                    <li>Working on mongodb cloud , Cron Jobs , aggregation and Send-Grid Api</li>
                </p>
            </div>

        </div>
        </div>
    )
}
