window.addEventListener("scroll", function() {
    let tou = document.querySelector(".tou");
    if (window.scrollY > 0) {
        tou.classList.add("bian");
    }else{
        tou.classList.remove("bian"); 
    }
})
(() => {
    // 设置字体大小
    function calcFontSize() {
      const zoom = window.screen.width / 1920;
      const size = zoom * 22;
      document.documentElement.style.fontSize = size + 'px';
      console.log('设置字体大小', size);
    }
      calcFontSize();
   
    window.onload = () => {
      console.log("页面加载完成")
   
      const resize = () => {
      
          calcFontSize();
   
      }
      window.onresize = resize;
    }
   
  })()