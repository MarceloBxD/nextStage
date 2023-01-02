export const transformPrice = (price) => {
  if (price === 0) {
    return "Free";
  }
  //   se preco nao tiver centavos, completa com 00
  if (price % 1 === 0) {
    return `${price}.00`;
  }
};
