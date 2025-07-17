'use client'
import { Suspense, useEffect } from "react";
import { SearchParams } from "../../components/SearchParams";
import { useRouter } from "next/navigation";

const Pending = () => {
    const router = useRouter();

    useEffect(() => {

       const timer = setTimeout(() => {
            router.push("/");
        }, 5000);

        return () => clearTimeout(timer);
    })
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParams
        title="Compra pendiente"
        description="Estamos procesando tu compra"
      />
    </Suspense>
  );
};

export default Pending;
