export interface Museum{
  id?: number;
  user_id?: string;
  name?: string;
  price?:number;
  description?: string;
  phone?: string;
  email?: string;
  website?: string;
  openinghours?: string;
  city? : string;
  ticket_purchase_page? : string;
  country? : string;
  direction? : string;
  postalcode? : string;
  colection_period? : string;
  image? : string;
  created_at? : Date;
}
