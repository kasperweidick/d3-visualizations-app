import { format } from 'd3'

const siFormat = format('.2s')
export const xAxisTickFormat = (tickValue: number) =>
    siFormat(tickValue).replace('G', 'B')
