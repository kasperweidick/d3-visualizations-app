import { csvFormat } from "d3-dsv"

const message = (data:any) => {
    let message = ''
    message += Math.round(csvFormat.length / 1024) + ' kb \n'
    message += `${data.length} rows \n`
    message += `${data.columns.length} columns \n`
    return message
}

export default message