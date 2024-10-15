document.addEventListener('DOMContentLoaded', function() {
  fetch('data/product.json')
  .then(response => response.json())
  .then(products => {
    const productList = document.getElementById('productTable');
    const productItem = document.createElement('tr');
    for (let i = 0; i < products.length; i++){
      const product= products[i];
      productList.appendChild(productItem);
      const productItemStart = document.createElement('th');
      productTable.innerHTML += `<td>${product.id}</td><td>${product.name}</td><td>${product.price}</td><td>${product.description}</td>`
    }
  })
  .catch(error => console.error('エラー:', error));
});
