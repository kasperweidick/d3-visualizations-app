import { useState, useEffect } from 'react'
import { csv } from 'd3'

const csvUrl =
    'https://gist.githubusercontent.com/kasperweidick/baf467a5a6680a6bf9d30b84c7234c5c/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv'

export const useData = () => {
    const [data, setData] = useState<Array<any>>()

    useEffect(() => {
        const row = (d: any) => {
            d['Population'] = +d['2020'] * 1000
            return d
        }
        csv(csvUrl, row).then((data) => {
            setData(data.slice(0, 10))
            console.log(data.slice(0, 10))
        })
    }, [])

    return data
}
