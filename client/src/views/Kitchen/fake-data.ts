type OrderType = {
    estime_total: number,
    status: string,
    items: any,
    table_id: string
}

export const orders: OrderType = [
    {
        estime_total: 15,
        status: "processing",
        items: [
            {
                id: "f1",
                price: 100,
                quantity: 2
            },
            {
                id: "f2",
                price: 200,
                quantity: 3
            }
        ],
        table_id: "t1"
    },
    {
        estime_total: 15,
        status: "confirmed",
        items: [
            {
                id: "f3",
                price: 100,
                quantity: 3
            },
            {
                id: "f4",
                price: 200,
                quantity: 4
            }
        ],
        table_id: "t2"
    },
    {
        estime_total: 15,
        status: "cancelled",
        items: [
            {
                id: "f4",
                price: 100,
                quantity: 5
            },
            {
                id: "f6",
                price: 200,
                quantity: 6
            }
        ],
        table_id: "t3"
    },
    {
        estime_total: 15,
        status: "delivered",
        items: [
            {
                id: "f7",
                price: 100,
                quantity: 2
            },
            {
                id: "f8",
                price: 200,
                quantity: 9
            }
        ],
        table_id: "t4"
    }
]