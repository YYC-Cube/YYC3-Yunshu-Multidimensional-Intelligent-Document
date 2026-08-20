class ImageProcessor {
  constructor() {
    this.lazyLoadObserver = new IntersectionObserver(this._handleLazyLoad.bind(this));
  }

  // 15.1 图片编辑
  applyFilter(image, filter) {
    const canvas = document.createElement('canvas');
    // 实现滤镜效果
    return canvas.toDataURL();
  }

  // 15.2 懒加载
  setupLazyLoad(images) {
    images.forEach(img => this.lazyLoadObserver.observe(img));
  }

  _handleLazyLoad(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        this.lazyLoadObserver.unobserve(img);
      }
    });
  }
}