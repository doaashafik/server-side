export const plusItem = (item) => {
  item.count++;
  return item;
};

export const minusItem = (item) => {
  item.count = item.count >= 1 ? item.count - 1: 0;
  return item;
};
export const totalPricePerItem = (item) => {
  item.total = item.count * item.price;
  return item;
};

export const addItem = (items, item) => {
  const itemFound = items.filter(i => item.id == i.id);
  if(itemFound.length > 0) {
    itemFound[0].count++;
    return [...items.filter(i => i.id !== item.id), itemFound[0]]
  }
  else {
    return [...items, {...item, count: 1 }]
  }
 }

 export const getCount = (items) =>{
  const counts = items.map(item => item.count);
  return counts.length > 0 ? counts.reduce((a, b) => a + b): 0
 }