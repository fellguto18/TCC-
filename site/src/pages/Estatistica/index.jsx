
import './index.scss';
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Janeiro',
    Doadores: 4000,
    Doações: 2400,
    amt: 2400,
  },
  {
    name: 'Fevereiro',
    Doadores: 3000,
    Doações: 1398,
    amt: 2210,
  },
  {
    name: 'Março',
    Doadores: 2000,
    Doações: 9800,
    amt: 2290,
  },
  {
    name: 'Abril',
    Doadores: 2780,
    Doações: 3908,
    amt: 2000,
  },
  {
    name: 'Maio',
    Doadores: 1890,
    Doações: 4800,
    amt: 2181,
  },
  {
    name: 'Junho',
    Doadores: 2390,
    Doações: 3800,
    amt: 2500,
  },
  {
    name: 'Julho',
    Doadores: 3490,
    Doações: 4300,
    amt: 2100,
  },
  {
    name: 'Agosto',
    Doadores: 3490,
    Doações: 4300,
    amt: 2100,
  },
  {
    name: 'Setembro',
    Doadores: 3490,
    Doações: 4300,
    amt: 2100,
  },
  {
    name: 'Outubro',
    Doadores: 3490,
    Doações: 4300,
    amt: 2100,
  },
  {
    name: 'Novembro',
    Doadores: 3490,
    Doações: 4300,
    amt: 2100,
  },
  {
    name: 'Dezembro',
    Doadores: 3490,
    Doações: 4300,
    amt: 2100,
  },
];
export default function Grafico() {
  return (
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Doadores" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Doações" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
  
  );}

  



