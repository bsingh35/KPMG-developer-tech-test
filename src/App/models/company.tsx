import { Fees } from "./fees";
import { Location } from "./location";

export interface Company {
    id: number;
    company: string;
    sector: string;
    stockSymbol: string;
    address: string;
    location:Location;
    fees:Fees;
  }