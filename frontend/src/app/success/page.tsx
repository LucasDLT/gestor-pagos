'use client'
import { Suspense } from "react";
import {SearchParams} from "../../components/SearchParams";




const Success = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParams title="Compra exitosa" description="Gracias por tu compra" />
    </Suspense>
  )
}

export default Success