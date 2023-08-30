var tgdn = {
  FAST: 250,
  SLOW: 800,
  SCROLL_SPEED: 500
};
var intervalId;
var looping = true;

tgdn.staffButtonClick = function(e){
  var $this = $(this);
  var staffId = $this.data("staff-id");
  tgdn.showStaff(staffId);

  e.preventDefault();
  return false;
};

tgdn.showStaff = function(staffId){

stopLoop();
$("div").removeClass("slide");

  var target =  tgdn.$header.get(0).offsetHeight - 10;

  $("html, body").stop().animate({scrollTop: target}, tgdn.SCROLL_SPEED);
  

  tgdn.$navigation.removeClass("hidden");

  tgdn.$clusters.css({opacity: 1}).stop().animate({opacity: 0}, tgdn.SLOW);

  tgdn.$clusters.addClass("hidden");

  tgdn.$clusterStaffs.addClass("hidden");

  tgdn.$staffs.find(".staff-wrapper").each(function(i, element){
    var $staff = $(element);
    if($staff.hasClass("staff-" + staffId)){
      $staff.removeClass("hidden");
      $staff.css({opacity: 0}).stop().animate({opacity: 1}, tgdn.FAST);
      tgdn.$color.css({
        backgroundColor: $staff.data("staff-color")
      }).removeClass("hidden");
    } else{
      $staff.addClass("hidden");
    }
  });
};

tgdn.showClusters = function(e){

  setTimeout(function(){
    tgdn.$navigation.addClass("hidden");
  }, tgdn.FAST);

  $(".header-switch").addClass("slide");  
  openMainPage(cycleBackgrounds);

  tgdn.$clusters.removeClass("hidden");
  tgdn.$clusters.css({opacity: 0}).stop().animate({opacity: 1}, tgdn.SLOW);

  tgdn.$clusterStaffs.each(function(i, element){
    var $staff = $(element);
    setTimeout(function(){
      $staff.removeClass("hidden");
    }, i * 100 + 100);
  });

  tgdn.$navigation.click(function(e){
    $("html, body").stop().animate({scrollTop: 0}, tgdn.SCROLL_SPEED);
    tgdn.showClusters(e);
  });

  tgdn.$staffs.find(".staff-wrapper").addClass("hidden");
  tgdn.$color.addClass("hidden");

  if(e) e.preventDefault();
  return false;
};

// START DOCUMENT
$(document).ready(function(){
  FastClick.attach(document.body);

  tgdn.$clusters = $("#clusters-wrapper");
  tgdn.$staffs = $("#staff-wrapper");
  tgdn.$navigation = $("#navigation-wrapper");
  tgdn.$clusterStaffs = tgdn.$clusters.find(".staff");

  tgdn.$header = $("#header-wrapper");

  tgdn.$color = tgdn.$header.find("#color-cover");
  tgdn.$logo = tgdn.$header.find("#logo");
  tgdn.$headerTitle = tgdn.$header.find("#title");
  tgdn.$headerSubtitle = tgdn.$header.find("#sub-title");

  tgdn.$clusters.find(".btn-more").click(tgdn.staffButtonClick);

  tgdn.$staffs.find(".btn-staff").click(tgdn.staffButtonClick);
  if(intervalId === undefined){
    cycleBackgrounds();
  }

});

$(window).on("load", function(){

  setTimeout(function(){
    tgdn.$logo.removeClass("hidden");
  }, 100);

  setTimeout(function(){
    tgdn.$headerTitle.removeClass("hidden");
  }, 300);

  setTimeout(function(){
    tgdn.$headerSubtitle.removeClass("hidden");
  }, 400);

  setTimeout(function(){
    var url = location.href;
    var split = url.split("#");
    split.pop();
    var hash = split.join("#").trim();

    if(hash){
      tgdn.showStaff(hash);
    } else{
      tgdn.showClusters();
    }
  }, 800);
});

// Slideshow using Ricks Code
function cycleBackgrounds() {
    var index = 0;
 
    $imageEls = $('#header-wrapper .slide'); // Get the images to be cycled.
 
    intervalId = setInterval(function () {
        // Get the next index.  If at end, restart to the beginning.
        index = index + 1 < $imageEls.length ? index + 1 : 0;
        
        // Show the next
        $imageEls.eq(index).addClass('show');
        
        // Hide the previous
        $imageEls.eq(index - 1).removeClass('show');
    }, 4000);
};
 
 function setStaffHeader (imageURL, backgroundPos='50% 50%', contain=false){
  $('#header-wrapper #image-wrapper').css('background-image', 'url(' + imageURL + ')');
  $('#image-wrapper').css('background-position', backgroundPos);
  if(contain){
    $('#image-wrapper').css('background-size', 'cover')
  }

}

function addAlert(){
  alert('The staff requirements will be emailed to applicants on August 30.');
}

function stopLoop(){
  clearInterval(intervalId);
  looping = false;
}

waitTilRecweek = () => {
  alert('The interview sign-up sheet will be posted on August 31.')
}

openMainPage = (callback) => {
  setTimeout(function(){
    $("#header-wrapper #image-wrapper").css('background-image', 'none');
  }, 2000);
  if(intervalId === undefined || looping == false){
    callback();
  }
}

removeSlides = () => {
$("div").removeClass("slide");
}

// Document Ready.
// $(function () {
// });

disableAlert = () => {
  alert('The application requirements will be up by September 27.')
}

// var modalCOA = document.querySelector('.modal-coa');
// window.onload= function(){
// var closeBtn = document.querySelector('.modal-close');

// closeBtn.addEventListener('click', closeModal);
// }
// function closeModal(){
//   modalCOA.addClass("modal-hide");
// }
$(document).ready(function(){
  $(".modal-close").click(function(){
    $(".modal-coa").hide();
  });
  $(".close").click(function(){
    $(".modal-coa").hide();
  });
});