let order = [];
import { ioKitchen } from "../../index.js";

export const kitchenNamespace = (socket) => {
  console.log("connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("order_kitchen", (data) => {
    // nhận đơn
    console.log(data);
    ioKitchen.emit("order_user", data);
  });
  socket.on("order_user", (data) => {});
};
