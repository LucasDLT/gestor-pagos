'use client'
import { Suspense } from "react";
import { SearchParams } from "../../components/SearchParams";

const Pending = () => {
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
