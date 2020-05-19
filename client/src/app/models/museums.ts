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
  province? : string;
  postalcode? : string;
  image? : string;
  created_at? : Date;
}
