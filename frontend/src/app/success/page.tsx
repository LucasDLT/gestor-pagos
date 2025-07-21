'use client'
import { Suspense, useEffect } from "react";
import {SearchParams} from "../../components/SearchParams";
import { useRouter } from "next/navigation";



const Success = () => {

    const router = useRouter();

 useEffect(() => {

       const timer = setTimeout(() => {
            router.push("/");
        }, 5000);

        return () => clearTimeout(timer);
    })
 
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParams title="Compra exitosa" description="Gracias por tu compra" status="success" />
    </Suspense>
  )
}

export default Success