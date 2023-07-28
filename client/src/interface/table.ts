export enum Status {
    available = "available",
    occupied = "occupied",
    unavailable = "unavailable"
}


export interface ITable {
    _id: string | number;
    table_number: number,
    capacity: number,
    status: Status.available,
    description?: string,
    location: number,
    order_id?: string[]

}