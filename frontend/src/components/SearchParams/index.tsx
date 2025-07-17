'use client'
import { useSearchParams } from "next/navigation"
import { SearchParamsProps } from "@/types";

export const SearchParams = ( {title, description}:SearchParamsProps)=>{
    const searchParams = useSearchParams();
    //capturamos las siguientes query y las guardo en las constantes
    const paymentId = searchParams.get('payment_id');
    const status = searchParams.get('status');
    const merchandtOrderId = searchParams.get('merchant_order_id')


    return (
        <div>
            <h1>{title}</h1>
            <h2>{description}</h2>
            { paymentId && <p>ID del pago: {paymentId}</p>}
            { status && <p>Estado: {status}</p>}
            { merchandtOrderId && <p>Orden: {merchandtOrderId}</p>}
        </div>
    )
}
