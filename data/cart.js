export const cart = [];

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