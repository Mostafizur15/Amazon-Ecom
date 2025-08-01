export const cart = [
{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
},
{
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
}
];

export function addToCart(productId, quantitySelector) {
  let matchingItem;
  cart.forEach((item) => {
    if(item.productId === productId) {
      matchingItem = item;
      // console.log('Found matching item in cart:', matchingItem);
    }
  });
  if(matchingItem) {
    matchingItem.quantity+= parseInt(quantitySelector.value, 10);
  }else{
    cart.push({
      productId: productId,
      quantity: parseInt(quantitySelector.value, 10)
    });
  }
}