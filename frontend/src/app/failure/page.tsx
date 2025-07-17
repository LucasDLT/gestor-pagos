'use client'
import { Suspense } from "react"
import {SearchParams} from "../../components/SearchParams"


const Failure = ()=>{
    return (
        <Suspense fallback ={<div>Loading...</div>}>
            <SearchParams title="Compra fallida" description="Hubo un error con tu compra" />
        </Suspense>
    )
}
export default Failure