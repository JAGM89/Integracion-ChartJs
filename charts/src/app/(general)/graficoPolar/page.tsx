'use client'
import { fetchValorMaximoPlanificador} from '@/app/Services/Api';
import React, { useEffect, useState } from 'react'
import { PolarArea } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);



export default function page() {

  const [charData, setCharData] = useState({
    labels: [],
    datasets: [{
      label: '',
      data: [],
      backgroundColor: [] as any[],
    }]
  });


  useEffect(() => {
    fetchValorMaximoPlanificador()
      .then(data => {

        const Label = data.data.map((item: any) => item.plannerCode);
        const valores = data.data.map((item: any) => item.ValorMAX);

        setCharData({
          labels: Label,
          datasets: [{
            label: 'valores maximos por planificador',
            data: valores,
            backgroundColor: ['rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',]
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
            <h3 className="text-2xl font-bold text-black bg-green-500 p-3 rounded-lg text-center">Grafico Polar</h3>
            <PolarArea data={charData} width={1800} height={800} options={{
    responsive: false,
  }}></PolarArea>
          </div>

        )
          :
          <p>Informacion Cargando...</p>
      }
    </div>
  )
}
