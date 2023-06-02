const numberOfCateforiesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${numberOfCateforiesEl.length}`);

numberOfCateforiesEl.forEach(number => {
    console.log(`Category: ${number.firstElementChild.textContent}`);
    console.log(`Elements: ${number.lastElementChild.children.length}`)
})

