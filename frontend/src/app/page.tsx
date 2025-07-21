'use client'
import { MercadoPagoItem } from '@/types'
import Image from 'next/image'

export default function Home() {
  const PORT = process.env.NEXT_PUBLIC_API_URL
  const MP_REDIRECT_URL = process.env.NEXT_PUBLIC_MP_REDIRECT_URL

  const item: MercadoPagoItem = {
    id: "1",
    title: "Porta Espiral",
    description: "Hecho en ceramica",
    picture_url: "/images/portaEspiral.jpg", 
    category_id: "artesanias en ceramica",
    quantity: 1,
    currency_id: "ARS",
    unit_price: 1000
  }

const handleButton = async ()=> {
try {
    const response = await fetch(`${PORT}/api/payment/create-preference`, {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({
      items:[item]
      
    })
  })
  console.log(item);
    const data = await response.json();
    console.log(data);
    
    const id = data.id;
    console.log(id);
    
    if(id){
     window.location.href = `${MP_REDIRECT_URL}${id}`
    }
} catch (error) {
  console.log(error)
}

{/*useEffect(() => {
  if (preferenceId ) {
    window.location.href = `${MP_REDIRECT_URL}${preferenceId}`;
  }
}, [preferenceId]);
*/}
}
  return (
<main className='flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500/5 via-blue-500 h-[80vh]'>
  <h1 className='text-3xl font-bold mb-4 p-2'>PRUEBA MERCADO PAGO SDK V.2</h1>
  <h2 className='text-3xl font-bold mb-4 p-2'>CHECKOUT PRO</h2>
  <div className='border border-blue-950 flex flex-col justify-center items-center rounded m-1 p-1'>
    <h2 className='uppercase'>{item.title}</h2>
    <p className='uppercase' >{item.description}</p>
    <Image src={item.picture_url} alt={item.title} width={200} height={200} />
    <p>$ {item.unit_price}</p>
    <p>{item.quantity}</p>
    <button
    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer transition-all duration-750 ease-in-out'
    onClick={handleButton}
    >pagar con mercadopago</button>
  </div>
</main>
  );
}
