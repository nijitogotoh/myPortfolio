const sliders = [
    {
      containerSelector: '.web-slider-container',
      slideClass: 'web-slideimg',
      images: [
        { src: 'images/works-imgs/web/web1.png', link: 'works-web.html' },
        { src: 'images/works-imgs/web/web2.png', link: 'works-web.html' },
        { src: 'images/works-imgs/web/web3.png', link: 'works-web.html' },
      ]
    },
    {
      containerSelector: '.mv-slider-container',
      slideClass: 'mv-slideimg',
      images: [
        { src: 'images/works-imgs/mv/walk/walk1.png', link: 'works-mv.html' },
        { src: 'images/works-imgs/mv/manyumal/manyumal1.png', link: 'works-mv.html' },
        { src: 'images/works-imgs/mv/hara/hara1.png', link: 'works-mv.html' },
      ]
    },
    {
      containerSelector: '.etc-slider-container',
      slideClass: 'etc-slideimg',
      images: [
        { src: 'images/works-imgs/etc/route48.png', link: 'works-etc.html' },
        { src: 'images/works-imgs/etc/jw0.png', link: 'works-etc.html' },
        { src: 'images/works-imgs/etc/ls1.png', link: 'works-etc.html' },
      ]
    }
  ];

  sliders.forEach(({ containerSelector, slideClass, images }) => {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const totalSets = 5;
    for (let i = 0; i < totalSets; i++) {
      images.forEach(({ src, link }) => {
        const slide = document.createElement('div');
        slide.className = slideClass;

        const a = document.createElement('a');
        a.href = link;
        a.style.pointerEvents = 'auto'; // 明示的にリンクを有効にする

        const img = document.createElement('img');
        img.src = src;
        img.alt = '';

        a.appendChild(img);
        slide.appendChild(a);
        container.appendChild(slide);
      });
    }

    const singleSlide = container.querySelector(`.${slideClass}`);
    const singleSlideWidth = singleSlide.offsetWidth;
    const totalWidth = container.scrollWidth;

    // 初期スクロール位置を中央に
    container.scrollLeft = totalWidth / 2 - container.offsetWidth / 2;

    const autoScroll = () => {
      container.scrollLeft += singleSlideWidth;

      // 巻き戻し処理
      if (container.scrollLeft >= totalWidth - container.offsetWidth * 1.5) {
        container.scrollLeft = totalWidth / 2 - container.offsetWidth / 2;
      }
    };

    setInterval(autoScroll, 3000);

    // スクロールだけを無効化、リンクは有効に
    container.style.overflowX = 'hidden';

    const preventScroll = (e) => {
      if (!e.target.closest('a')) {
        e.preventDefault();
      }
    };

    container.addEventListener('wheel', preventScroll, { passive: false });
    container.addEventListener('touchstart', preventScroll, { passive: false });
  });
