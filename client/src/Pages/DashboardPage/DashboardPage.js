import React from 'react'
import { useLocalDb } from '../../DbContext'
import { Bar } from 'react-chartjs-2'

const DashboardPage = () => {
    const localdb = useLocalDb();
    let team_data = {};
     localdb.allDocs({
        include_docs: true
    }).then((result) => {
        console.log(result);
        result.rows.forEach((doc) => {
            console.log(doc);
        });
    }).catch((err) => {
        console.log("Error Fetching Docs from Database!");
        console.log(err);
    })
    //https://react-charts.js.org/examples/column
    return (
        <div>
            <Bar
                data={{
                    labels: ['4388', '1619'],
                    datasets: [
                        
                    ]
                }}
                // height
            />
        </div>
    )
}

export default DashboardPage
