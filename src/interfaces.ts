// import { MouseEventHandler } from "react";

export interface ISeat {
  row: number;
  seat_name: string;
  quota: 'normal' | 'ladies';
  status: 'open' | 'reserved' | 'blocked';
  position: 'window' | 'aisle';
  type: 'normal' | 'pushback' | 'sleeper';
  seat_price: number;
  isActive: boolean;
}

export interface IColumn {
  alignment: ISeat[];
}

export interface IDeck {
  total_rows: number;
  total_columns: number;
  aisle: number;
  columns: { [key: string]: IColumn | null };
}

export interface IBusLayout {
  total_seats: number;
  lower_deck: IDeck;
  upper_deck?: IDeck;
}

export interface ISvgProps {
  className: string;
  fill?: string;
  // onClick: MouseEventHandler<SVGElement>;
}
