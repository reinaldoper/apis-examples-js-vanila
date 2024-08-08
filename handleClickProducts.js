import { apiProdutos } from "./apiProdutos.js";
import { removal } from "./removal.js";

export const handleClickProducts = async () => {
  removal();
  const products = await apiProdutos();
  document.body.appendChild(products);
}