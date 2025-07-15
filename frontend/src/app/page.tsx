'use client'
import { MercadoPagoItem } from '@/types'

export default function Home() {
  const PORT = process.env.NEXT_PUBLIC_API_URL
  const MP_REDIRECT_URL = process.env.NEXT_PUBLIC_MP_REDIRECT_URL

  const item: MercadoPagoItem = {
    id: "1",
    title: "Porta Espiral",
    description: "Hecho en ceramica, perfecto para interiores",
  //  picture_url: "/images/portaEspiral.jpg", comente esta linea por que como el back esta en render y la imagen en local, hasta que no haya deployado esta parte la peticion de preferencia de id, me da error 500 
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
<main>
  <h1>Prueba mercado pago</h1>
  <div>
    <h2>{item.title}</h2>
    <p>{item.description}</p>
    {/*<Image src={item.picture_url} alt={item.title} width={200} height={200} />*/}
    <p>{item.unit_price}</p>
    <p>{item.quantity}</p>
    <button
    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer'
    onClick={handleButton}
    >pagar con mercadopago</button>
  </div>
</main>
  );
}
