// script.js
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    const images = document.querySelectorAll('.image');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            // 移除所有按钮的 active 类
            buttons.forEach(btn => btn.classList.remove('active'));
            // 为当前点击的按钮添加 active 类
            this.classList.add('active');

            // 过滤图片
            images.forEach(image => {
                if (category === 'all' || image.getAttribute('data-category') === category) {
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none';
                }
            });
        });
    });
});