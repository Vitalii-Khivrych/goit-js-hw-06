const itemRef = document.querySelectorAll('.item');
console.log('Number of categories:', itemRef.length);

itemRef.forEach(item => {
  const titelRef = item.querySelector('h2').textContent;
  console.log('Category:', titelRef);

  const itemListRef = item.querySelectorAll('li').length;
  console.log('Elements:', itemListRef);
});
