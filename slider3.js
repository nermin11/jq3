$(() => {
    let arr = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"]
    let x = 0
    let timer
    let slider = $("#slider")
    slider
        .css({
            position: "relative",
            width: "80%",
            height: "60vh",
            margin: "10vh auto",
            boxShadow: "0 0 10px #000",
            background: `url('img/${arr[x]}') center/cover`,
            overflow: "hidden"
        })
        .append('<div id="ribbon"></div>')
        .append('<div id="thumb"></div>')
        .after('<div id="nav"></div>')
        .click(function(e){
            change( e.pageX > $(window).width() / 2 ? 1 : -1 )
        })
        let nav = $("#nav")
        nav
            .css({
            position:'absolute',
            top: '80px',
            right :'150px',
            textAlign :'center',
            width: "40px",
            height: "15px",
            background: "#AAA",
            margin: "5px",
            padding: '5px',
            borderRadius:'10px',
            border:'2px solid black'
        })
        nav.append(x)

        let ribbon = $("#ribbon")
        ribbon.css({
            position: "absolute",
            display: "flex"
        })
        let thumb = $('#thumb')
        thumb.css({
            position:'absolute',
            bottom: 0,
            width : '100%',
            textAlign :'center'
        })
        arr.forEach(image => thumb.append(`<img src ='img/${image}'/>`))
        arr.forEach(image => ribbon.append(`<img src="img/${image}" />`) )

        $('#thumb > img')
            .css({
            width: '30px',
            height: '30px',
            borderRadius :'50%',
            border: '2px solid #FFF',
            margin:'10px'
        })
        .click(function(e){
            e.stopPropagation()
            x = $(this).index()-1
            change(1)
        })
        timer = setTimeout(change,3000)
        
        $("#ribbon > img").css({
            width: slider.width(),
            height: slider.height(),
            objectFit: "cover"
        })
        
        function change(dir = 1) {
            clearTimeout(timer)
            x += dir
            if(x < 0) x = arr.length - 1
            if(x >= arr.length) x = 0
            ribbon.animate({ left: -x * slider.width() } , "slow")
            timer = setTimeout(change,3000)
            $('#thumb > img').css('opacity', .5)
            $('#thumb > img').eq(x).css('opacity', 1)
            nav.text(x +'/'+ (arr.length-1))
        }      
})