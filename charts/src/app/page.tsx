import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
     <h1>Integracion con graficas</h1>

     <Link href='/graficoBarra'>Ir al grafico de barra/ Salario x Depto</Link> <br />
     <Link href='/graficolineal'>Ir al grafico de Lineal/ Emplaeado x Depto</Link> 

     <Link href='/graficodona'>Ir al grafico de Dona/ Salario x Depto</Link> 
   
      <h1 className="text-2xl font-bold text-black bg-lime-300 p-3 rounded-lg text-center">Integracion Apis de la tabla de Producto</h1>

     <Link className="inline-block px-6 py-3 rounded-2xl bg-red-600 text-white font-semibold shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300" href='/graficoPolar'>Ir al grafico Polar/ Valor Max Planificador</Link> 

      <Link className="inline-block px-6 py-3 rounded-2xl bg-green-600 text-white font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300" href='/graficoRadar'>Ir al grafico Radar/ Suma por total de marca</Link> 

      <Link className="inline-block px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300" href='/graficoDona2'>Ir al grafico de Dona/ Marca por zonas</Link> 

     

    </div>
  );
}
