import { apiProdutos } from "./apiProdutos.js";

export const handleClickProducts = async () => {
  const ulRemove = document.querySelector('ul');
  if (ulRemove) {
      ulRemove.remove();
  }

  if (document.querySelector('div')) {
      document.querySelector('div').remove();
  }
  const products = await apiProdutos();
  document.body.appendChild(products);
}