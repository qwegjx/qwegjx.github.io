document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const prevPageButton = document.getElementById('prev-page');
    const nextPageButton = document.getElementById('next-page');
    const pageInfo = document.getElementById('page-info');

    let currentCategory = 'all';
    let currentPage = 1;
    const imagesPerPage = 6;

    const images = {
        nature: [
            'images/nature/nature1.jpg',
            'images/nature/nature2.jpg',
            // 添加更多图片路径
        ],
        city: [
            'images/city/city1.jpg',
            'images/city/city2.jpg',
            // 添加更多图片路径
        ],
        animals: [
            'images/animals/animal1.jpg',
            'images/animals/animal2.jpg',
            // 添加更多图片路径
        ]
    };

    function loadImages(category, page) {
        gallery.innerHTML = '';
        let imageList = [];

        if (category === 'all') {
            for (let key in images) {
                imageList = imageList.concat(images[key]);
            }
        } else {
            imageList = images[category];
        }

        const start = (page - 1) * imagesPerPage;
        const end = start + imagesPerPage;
        const paginatedImages = imageList.slice(start, end);

        paginatedImages.forEach(imgSrc => {
            const imgElement = document.createElement('img');
            imgElement.src = imgSrc;
            gallery.appendChild(imgElement);
        });

        pageInfo.textContent = `第 ${page} 页 / 共 ${Math.ceil(imageList.length / imagesPerPage)} 页`;
        prevPageButton.disabled = page === 1;
        nextPageButton.disabled = page === Math.ceil(imageList.length / imagesPerPage);
    }

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.getAttribute('data-category');
            currentPage = 1;
            loadImages(currentCategory, currentPage);
        });
    });

    prevPageButton.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            loadImages(currentCategory, currentPage);
        }
    });

    nextPageButton.addEventListener('click', function() {
        const totalPages = Math.ceil(images[currentCategory === 'all' ? Object.values(images).flat().length : images[currentCategory].length / imagesPerPage]);
        if (currentPage < totalPages) {
            currentPage++;
            loadImages(currentCategory, currentPage);
        }
    });

    // 初始加载
    loadImages(currentCategory, currentPage);
});