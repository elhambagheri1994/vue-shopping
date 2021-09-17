import { saveData, getData } from "@/common/store.service";
import EventBus from "@/common/event-bus";

export default function addSeprator(data) {
  if (data) {
    return data.toLocaleString();
  } else {
    return data;
  }
}
export function addItemToCart(item, event = null) {
  event?.stopPropagation();
  const products = getData("products") || [];
  products.push(item);
  saveData("products", products);
  EventBus.$emit("addToCartEvent", products);
  this.$router.push({ path: "/cart" });
}
