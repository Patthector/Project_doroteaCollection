jQuery(document).ready(function($){
  $(window).ready(function() {
    
    //Min_height_piece();
    CreatingTheGrid();

    //
    //THE GRID
    //
    function CreatingTheGrid(){
      let grid = $("#grid__collage");
      let children = grid.children();
      var height = 0;
      for (let i = 0; i < 6; i++) {/*just the first five elements*/
        ///SETTING THE HEIGHTS OF ALL THE IMGS
        height = 0;
        if(children.eq(i).hasClass('collage__content-container')){
          height = children.eq(i).children().eq(0).height() + 20; //+20px's
        }

        else if(children.eq(i).hasClass('collage__verse-container')){
          height = children.eq(i).children().eq(1).height();
          height += children.eq(i).children().eq(0).height() * 2 + 24 * 2; //top-line and bottom-line && margins

        }/*
        else{
          height = children.eq(i).children().eq(0).height() + 4;//img*margin
          console.log(children.eq(i).children().eq(0).height());
        }*/
        else{
          height = children.eq(i).children().eq(0).height();
        }
        let repetitions = Math.ceil(height / 10);/*10px*/
        children.eq(i).css(`grid-row-end`,`span ${repetitions}`);
        children.eq(i).css(`height`,repetitions * 10);//div's height
        //SQUARE
        if(children.eq(i).hasClass('square')){
          $('.square').css(`grid-row-end`,`span ${repetitions}`);
          $('.square').css(`height`,repetitions * 10);
          $('.square img').css(`height`,'100%');//img's height
        }
        //HRECT
        else if(children.eq(i).hasClass('hrect')){
          $('.hrect').css(`grid-row-end`,`span ${repetitions}`);/*horizontal rectangle*/
          $('.hrect').css(`height`,repetitions * 10);
          $('.hrect img').css(`height`,'100%');//img's height
        }
        //VRECT
        else if(children.eq(i).hasClass('vrect')){
          $('.vrect').css(`grid-row-end`,`span ${repetitions}`);/*horizontal rectangle*/
          $('.vrect').css(`height`,repetitions * 10);
          $('.vrect img').css(`height`,'100%');//img's height
        }
      }
    }

    $("#grid__collage").on('click',function(e){
      if(e.target.tagName === "IMG"){
        let pic__id = parseInt(e.target.id.slice(-1));
        $("#modal__collage .carousel-indicators li.active").toggleClass( "active" );
        $("#modal__collage .carousel-indicators li").eq(pic__id).toggleClass( "active" );
        $("#modal__collage .carousel-inner .carousel-item.active").toggleClass( "active" );
        $("#modal__collage .carousel-inner").children().eq(pic__id).toggleClass( "active" );
      }
    });
    $("#footer_to-top").click(function () {
     $("html, body").animate({scrollTop: 0}, 1000);
    });

    $(window).on('load',function(){
      console.log("LOADING");
      CreatingTheGrid();
    });
    $(window).on('resize',function(){
      console.log("RESIZING");
      let main_display = $("main").css("display");
      if(main_display === "grid"){//if is the grid show the menu
        $("#nav").css("display","block");
      }
      else{
        $("#nav").css("display","none");
      }
      CreatingTheGrid();
    });
    $(window).on('orientationchange',function(){
      console.log("ORIENTATIONCHANGE");
      let main_display = $("main").css("display");
      if(main_display === "grid"){//if is the grid show the menu
        $("#nav").css("display","block");
      }
      else{
        $("#nav").css("display","none");
      }
      CreatingTheGrid();
    });

  //CAROUSEL-SWIPE
    $(".carousel").carousel({
    swipe: 50 // percent-per-second, default is 50. Pass false to disable swipe
    });

  });
});
