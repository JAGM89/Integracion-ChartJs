"use client";
import { fetchMarcaPorZona } from "@/app/Services/Api";
import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function page() {
  const [charData, setCharData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        borderColor: [] as any[],
        backgroundColor: [] as any[],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    fetchMarcaPorZona()
      .then((data) => {
        const Label = data.data.map((item: any) => item.linecode);
        const valores = data.data.map(
          (item: any) => item.TotalbrandCode - item.CantidadxLinea
        );
        // const valores2=data.data.map((item:any)=>item.CantidadxLinea)

        setCharData({
          labels: Label,
          datasets: [
            {
              label: "Suma totales por marca",
              data: valores,
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
              ],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
              ],
              borderWidth: 1,
            },
          ],
        });
      })
      .catch((error) =>
        alert("Ocurrio un error al invocar el servicio" + error)
      );
  }, []);

  return (
    <div>
      {charData ? (
        <div>
          <h3 className="text-2xl font-bold text-black bg-green-500 p-3 rounded-lg text-center">Grafico Donaaa</h3>
          <Doughnut data={charData} width={1800} height={800} options={{
    responsive: false,
  }} ></Doughnut>
        </div>
      ) : (
        <p>Informacion Cargando...</p>
      )}
    </div>
  );
}
