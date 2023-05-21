window.addEventListener('scroll',function(){
        var header=document.querySelector('header');
        header.classList.toggle("sticky",window.scrollY>10);
    } )
    $(".option").click(function(){
        $(".option").removeClass("active");
        $(this).addClass("active");
        
     });