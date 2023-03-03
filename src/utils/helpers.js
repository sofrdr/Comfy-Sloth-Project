export const formatPrice = (price) => {
  const newPrice = Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price / 100);
  return newPrice;
};
