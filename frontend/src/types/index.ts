export interface MercadoPagoItem {
  id: string;
  title: string;
  description?: string;
  picture_url: string;
  category_id?: string;
  quantity: number;
  currency_id?: string;
  unit_price: number;
}

export interface SearchParamsProps{
    title: string,
    description: string,
    className?: string,
    status: "success" | "failure" | "pending";
}
