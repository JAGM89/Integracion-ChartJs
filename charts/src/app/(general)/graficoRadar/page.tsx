'use client'
import { fetchPorMarca} from '@/app/Services/Api';
import React, { useEffect, useState } from 'react'
import { Radar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);





export default function page() {

  const [charData, setCharData] = useState({
    labels: [],
    datasets: [{
      label: '',
      data: [],
      backgroundColor: ''
    }]
  });


  useEffect(() => {
    fetchPorMarca()
      .then(data => {

        const Label = data.data.map((item: any) => item.brandCode);
        const valores = data.data.map((item: any) => item.TotalbrandCode);

        setCharData({
          labels: Label,
          datasets: [{
            label: 'Suma totales por marca',
            data: valores,
            backgroundColor: 'rgba(158, 118, 160, 1)'
          }

          ]
        })

      })
      .catch((error) => alert('Ocurrio un error al invocar el servicio'+error))
  }, []);

  return (
    <div>
      {
        charData ? (
          <div>
            <h3>Grafico Radar</h3>
            <Radar data={charData} width={1800} height={800} options={{
    responsive: false,
  }}></Radar>
          </div>

        )
          :
          <p>Informacion Cargando...</p>
      }
    </div>
  )
}
