import React from 'react'
import ReactDOM from 'react-dom'
import { range } from 'rxjs'
import { map, filter } from 'rxjs/operators'
import { AreaChart, Area, ResponsiveContainer } from 'recharts'

range(1, 200)
  .pipe(filter(x => x % 2 === 1), map(x => x + x))
  .subscribe(x => console.log(x))

ReactDOM.render(
  <AreaChart theme={theme}>adsfdsf</AreaChart>,
  document.getElementById('app'),
)
