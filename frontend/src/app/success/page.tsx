'use client'
import { useSearchParams } from "next/navigation"
import { Suspense } from "react";





const SearchParamsContent = ()=>{
    const searchParams = useSearchParams();
    //capturamos las siguientes query y las guardo en las constantes
    const paymentId = searchParams.get('payment_id');
    const status = searchParams.get('status');
    const merchandtOrderId = searchParams.get('merchant_order_id')


    return (
        <div>
            <h1>Compra realizada con exito</h1>
            <p>ID del pago: {paymentId}</p>
            <p>Estado: {status}</p>
            <p>Orden: {merchandtOrderId}</p>
        </div>
    )
}


const Success = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParamsContent />
    </Suspense>
  )
}

export default Success