$(document).ready(() => {
    "use strict";

//Time CountDown
const countdownDates = [
    { date: new Date("Jul 4, 2024 15:00:00").getTime(), daysId: 'days1', hoursId: 'hours1', minutesId: 'minutes1', secondsId: 'seconds1' },
    // { date: new Date("Dec 31, 2024 23:59:59").getTime(), daysId: 'days2', hoursId: 'hours2', minutesId: 'minutes2', secondsId: 'seconds2' },
    // { date: new Date("Jan 1, 2025 00:00:00").getTime(), daysId: 'days3', hoursId: 'hours3', minutesId: 'minutes3', secondsId: 'seconds3' },
    // { date: new Date("Feb 14, 2025 00:00:00").getTime(), daysId: 'days4', hoursId: 'hours4', minutesId: 'minutes4', secondsId: 'seconds4' },
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
      600: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      400: {
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
    600: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    400: {
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
    600: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    400: {
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

  
   





   // Sponsor Slider //
  const sponsorwrapper = new Swiper(".flash-dealsss-wrap", {
    spaceBetween: 16,
    speed: 1200,
    breakpoints: {
      1399: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      0: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
    },
  });
  // Customer Slider //
  const customerwrapper = new Swiper(".customer-wrapper", {
    spaceBetween: 0,
    speed: 1200,
    loop: true,
    effect: 'fade',
    navigation: {
      nextEl: ".swiper-button-prevteam",
      prevEl: ".swiper-button-nextteam",
    },
    breakpoints: {
      1399: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
    },
  });
  // Testimonial Section Version 01 //
   const testimonialwrapv2 = new Swiper(".testimonial-wrapv2", {
    spaceBetween: 0,
    speed: 1200,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-prevteam03",
      prevEl: ".swiper-button-nextteam03",
    },
    breakpoints: {
      1399: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
    },
  });

});