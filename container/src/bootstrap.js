import { mount as productsmount } from "products/ProductsIndex";
import { mount as mountCart } from "cart/CartShow";

console.log("container");
productsmount(document.querySelector(".products"));
mountCart(document.querySelector("#dev-cart"));
