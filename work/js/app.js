document.addEventListener('DOMContentLoaded', function() {
  fetch('product.json')
  .then(response => response.json())
  .then(products => {
    const productList = document.getElementById('productTable');
    for (let i = 0; i < products.length; i++){
      const product = users[i];
      const productItem = document.createElement('td');
      productItem.textContent = `ID: ${product.id}, 商品名: ${product.name},価格: ${product.price}, 説明: ${product.description}`;
    }
  })
  .catch(error => console.error('エラー:', error));
});
