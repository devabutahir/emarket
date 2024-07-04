$(document).ready(() => {
    "use strict";

//--== Sticky Header ==--//
$(window).on("scroll", function () {
  var fixed_top = $(".main__header-section, .header__mobile");
  if ($(window).scrollTop() > 50) {
    fixed_top.addClass("header-fixed");
  }
  else {
    fixed_top.removeClass("header-fixed");
  }
    // Sticky Header
    if ($(window).scrollTop() > 50) {
      fixed_top.addClass("header-fixed");
    }
    else {
      fixed_top.removeClass("header-fixed");
    }
  });
  //--== Odometer Counter ==--//    

//--Global SideBar--
 $('.toggleMain-controls .bar-toggles, .cmn-overlay').on('click', function () {
  $('.toggleMain-controls .sidebar-wrapper, .cmn-overlay').toggleClass('active');
});
//--Global SideBar--    

//Time CountDown
const countdownDates = [
    { date: new Date("Jul 29, 2024 15:00:00").getTime(), daysId: 'days1', hoursId: 'hours1', minutesId: 'minutes1', secondsId: 'seconds1' },
    { date: new Date("Dec 31, 2024 23:59:59").getTime(), daysId: 'days2', hoursId: 'hours2', minutesId: 'minutes2', secondsId: 'seconds2' },
    { date: new Date("Jan 1, 2025 00:00:00").getTime(), daysId: 'days3', hoursId: 'hours3', minutesId: 'minutes3', secondsId: 'seconds3' },
    { date: new Date("Feb 14, 2025 00:00:00").getTime(), daysId: 'days4', hoursId: 'hours4', minutesId: 'minutes4', secondsId: 'seconds4' },
    // { date: new Date("Mar 17, 2025 00:00:00").getTime(), daysId: 'days5', hoursId: 'hours5', minutesId: 'minutes5', secondsId: 'seconds5' },
    // { date: new Date("Apr 1, 2025 00:00:00").getTime(), daysId: 'days6', hoursId: 'hours6', minutesId: 'minutes6', secondsId: 'seconds6' },
    // { date: new Date("May 5, 2025 00:00:00").getTime(), daysId: 'days7', hoursId: 'hours7', minutesId: 'minutes7', secondsId: 'seconds7' }
];
setInterval(() => {
    countdownDates.forEach(({ date, daysId, hoursId, minutesId, secondsId }) => {
        updateCountdown(date, daysId, hoursId, minutesId, secondsId);
    });
}, 1000);
function updateCountdown(countdownDate, daysId, hoursId, minutesId, secondsId) {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById(daysId).textContent = days;
    document.getElementById(hoursId).textContent = hours;
    document.getElementById(minutesId).textContent = minutes;
    document.getElementById(secondsId).textContent = seconds;

    if (distance < 0) {
        document.getElementById(daysId).textContent = "0";
        document.getElementById(hoursId).textContent = "0";
        document.getElementById(minutesId).textContent = "0";
        document.getElementById(secondsId).textContent = "0";
    }
}
//Time CountDown

// Support Featue Swiper
let supportfeature = new Swiper(".support-feature-wrap", {
    spaceBetween: 24,
    speed: 1200,
    loop: true,
    navigation: {
      nextEl: ".sup-pre",
      prevEl: ".sup-next",
    },
    breakpoints: {
      1399: {
        slidesPerView: 4,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      0: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
    },
});
// Function to enable or disable Swiper based on viewport width
const handleBreakpointChange = (e) => {
  if (e.matches) {
    // Viewport is 991px or wider
    supportfeature.disable();
  } else {
    // Viewport is less than 991px
    supportfeature.enable();
  }
};
const mediaQuery = window.matchMedia('(min-width: 1199px)');
mediaQuery.addListener(handleBreakpointChange);
handleBreakpointChange(mediaQuery);

// Flash Deals Swiper
let flashdealswrap = new Swiper(".flash-deals-wrap", {
  spaceBetween: 24,
  speed: 1200,
  loop: true,
  navigation: {
    nextEl: ".sup-pre",
    prevEl: ".sup-next",
  },
  breakpoints: {
    1399: {
      slidesPerView: 4,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
  },
});
// Function to enable or disable Swiper based on viewport width
const handleBreakpointChange2 = (e) => {
  if (e.matches) {
    // Viewport is 991px or wider
    flashdealswrap.disable();
  } else {
    // Viewport is less than 991px
    flashdealswrap.enable();
  }
};
const mediaQuery1 = window.matchMedia('(min-width: 991px)');
mediaQuery.addListener(handleBreakpointChange2);
handleBreakpointChange2(mediaQuery1);

// Flash Deals 02 Swiper
let flashdealswrap02 = new Swiper(".flash-deals-wrap02", {
  spaceBetween: 24,
  speed: 1200,
  loop: true,
  navigation: {
    nextEl: ".sup-pre",
    prevEl: ".sup-next",
  },
  breakpoints: {
    1399: {
      slidesPerView: 4,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
  },
});
// Function to enable or disable Swiper based on viewport width
const handleBreakpointChange02 = (e) => {
  if (e.matches) {
    // Viewport is 991px or wider
    flashdealswrap02.disable();
  } else {
    // Viewport is less than 991px
    flashdealswrap02.enable();
  }
};
const mediaQuery02 = window.matchMedia('(min-width: 991px)');
mediaQuery.addListener(handleBreakpointChange02);
handleBreakpointChange02(mediaQuery02);

// Flash Deals 03 Swiper
let auctionallitems = new Swiper(".auction-allitems", {
  spaceBetween: 24,
  speed: 1200,
  loop: true,
  navigation: {
    nextEl: ".sup-pre",
    prevEl: ".sup-next",
  },
  breakpoints: {
    1399: {
      slidesPerView: 4,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
  },
});
// Function to enable or disable Swiper based on viewport width
const handleBreakpointChange03 = (e) => {
  if (e.matches) {
    // Viewport is 991px or wider
    auctionallitems.disable();
  } else {
    // Viewport is less than 991px
    auctionallitems.enable();
  }
};
const mediaQuery03 = window.matchMedia('(min-width: 991px)');
mediaQuery.addListener(handleBreakpointChange03);
handleBreakpointChange03(mediaQuery03);

// Flash Deals 04 Swiper
let accessoriesinner = new Swiper(".accessories-inner", {
  spaceBetween: 16,
  speed: 1200,
  loop: true,
  navigation: {
    nextEl: ".sup-pre",
    prevEl: ".sup-next",
  },
  breakpoints: {
    1399: {
      slidesPerView: 6,
    },
    1199: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    991: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
  },
});
// Function to enable or disable Swiper based on viewport width
const handleBreakpointChange04 = (e) => {
  if (e.matches) {
    // Viewport is 991px or wider
    accessoriesinner.disable();
  } else {
    // Viewport is less than 991px
    accessoriesinner.enable();
  }
};
const mediaQuery04 = window.matchMedia('(min-width: 991px)');
mediaQuery.addListener(handleBreakpointChange04);
handleBreakpointChange04(mediaQuery04);

// Today Offer Slider //
const offerwrappers = new Swiper(".offer-wrappers", {
spaceBetween: 24,
speed: 1000,
loop: true,
// autoplay: {
//   delay: 1500,
//   disableOnInteraction: false,
// },
pagination: {
  el: ".swiper-pagination-at",
},
breakpoints: {
  1399: {
    slidesPerView: 3,
  },
  991: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  767: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  575: {
    slidesPerView: 1,
    spaceBetween: 5,
  },
  0: {
    slidesPerView: 2,
    spaceBetween: 5,
  },
},
});

// Sponsor Section Slider //
const sponsorwrapper = new Swiper(".sponsor-wrapper", {
  spaceBetween: 0,
  speed: 1200,
  loop: true,
  autoplay: {
  delay: 1500,
  disableOnInteraction: false,
  },
  breakpoints: {
    1399: {
      slidesPerView: 8,
    },
    991: {
      slidesPerView: 7,
      spaceBetween: 16,
    },
    600: {
      slidesPerView: 6,
      spaceBetween: 16,
    },
    400: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    0: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },
});

// Sponsor Section Slider //
const hero_wrapper = new Swiper(".hero-wrapper", {
  spaceBetween: 0,
  speed: 1200,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".hero-pre",
    prevEl: ".hero-next",
  },
  breakpoints: {
    1399: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    600: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    400: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
  },
});

// DropDown Customize
const dropdownToggle = document.getElementById('dropdownMenuButton');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownToggle.addEventListener('click', function () {
    dropdownMenu.classList.toggle('show');
});

window.addEventListener('click', function (e) {
    if (!dropdownToggle.contains(e.target)) {
        dropdownMenu.classList.remove('show');
    }
});

//Nice Select
$('select').niceSelect();

//--== wow Animation ==--//
// wow animation
new WOW().init();
// wow animation
//--== wow Animation ==--//

// Custom Tabs
$(".tablinks .nav-links").each(function () {
  var targetTab = $(this).closest(".singleTab");
  targetTab.find(".tablinks .nav-links").each(function() {
    var navBtn = targetTab.find(".tablinks .nav-links");
    navBtn.click(function(){
      navBtn.removeClass('active');
      $(this).addClass('active');
      var indexNum = $(this).closest("li").index();
      var tabcontent = targetTab.find(".tabContents .tabItem");
      $(tabcontent).removeClass('active');
      $(tabcontent).eq(indexNum).addClass('active');
    });
  });
});

});