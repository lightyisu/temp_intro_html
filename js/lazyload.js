document.addEventListener('DOMContentLoaded', function(){
    // 观察器
    let io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // 当元素出现在浏览器可视窗口内
            if(entry.intersectionRatio > 0){
                let img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                // 移除观察元素
                io.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(function(img){
        // 添加观察元素
        io.observe(img);
    });
});
    // 当浏览器窗口大小改变时，运行函数
    window.addEventListener('resize', lazyloader);
    // 当设备的纵横方向改变时，运行函数
    window.addEventListener('orientationChange', lazyloader);
     