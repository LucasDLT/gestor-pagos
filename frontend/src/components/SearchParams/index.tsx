'use client'
import { useSearchParams } from "next/navigation"
import { SearchParamsProps } from "@/types";
import { useParams } from "next/navigation";
import clsx from "clsx";

export const SearchParams = ( {title, description, className}:SearchParamsProps)=>{
    const searchParams = useSearchParams();
    //capturamos las siguientes query y las guardo en las constantes
    const paymentId = searchParams.get('payment_id');
    const merchandtOrderId = searchParams.get('merchant_order_id')
    const params = useParams();
    const status = params?.status as string // con esta combinacion que buscamos, podemos acceder a la informacion que queremos de la url
    const styles = clsx(
        "p-6 rounded-md shadow-md",
        className,
        {
            'bg-gradient-to-r from-green-600 via-blue-500 text-white': status === 'success',
            'bg-gradient-to-r from-red-600 via-pink-500 text-white': status === 'failure',
            'bg-gradient-to-r from-yellow-600 via-orange-500 text-white': status === 'pending',
        }
    )
    
    return (
        <div className={styles}>
            <h1 className="uppercase">{title}</h1>
            <h2 className="uppercase">{description}</h2>
            { paymentId && <p className="uppercase">ID del pago: {paymentId}</p>}
            { merchandtOrderId && <p className="uppercase">Orden: {merchandtOrderId}</p>}
        </div>
    )
}
