document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const imageItems = document.querySelectorAll('.image-item');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            // 移除所有按钮的 active 类
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // 为当前按钮添加 active 类
            this.classList.add('active');

            // 显示或隐藏图片
            imageItems.forEach(item => {
                if (category === 'all' || item.classList.contains(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});