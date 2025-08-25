function foodCategory(obj) {
  
    return `<div class="food-category">
            <img src="public/images/food-categories/${obj.img}" alt="category">
            <span>${obj.title}</span>
          </div>`;
}

export default foodCategory;