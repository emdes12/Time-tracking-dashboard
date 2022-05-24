const dailyClick = document.querySelector("#daily")
const weeklyClick = document.querySelector("#weekly")
const monthlyClick = document.querySelector("#monthly")


const workHr = document.querySelector("#work-hour");
const workPrev = document.querySelector(".prev-work");
const playHr = document.querySelector("#play-hour");
const playPrev = document.querySelector(".prev-play");
const studyHr = document.querySelector("#study-hour");
const studyPrev = document.querySelector(".prev-study");
const exerHr = document.querySelector("#exer-hour");
const exerPrev = document.querySelector(".prev-exer");
const socialHr = document.querySelector("#social-hour");
const socialPrev = document.querySelector(".prev-social");
const selfHr = document.querySelector("#self-hour");
const selfPrev = document.querySelector(".prev-self");



const dataObj = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

console.log(dataObj);

dailyClick.addEventListener('click', () => {
    //add and remove class (active)
    dailyClick.classList.add('active')
    weeklyClick.classList.remove('active')
    monthlyClick.classList.remove('active')

    //display daily works
    workHr.textContent = dataObj[0].timeframes.daily.current + 'hrs';
    workPrev.textContent = 'Last day - ' + dataObj[0].timeframes.daily.previous + 'hrs'
    playHr.textContent = dataObj[1].timeframes.daily.current + 'hrs';
    playPrev.textContent = 'Last day - ' + dataObj[1].timeframes.daily.previous + 'hrs'
    studyHr.textContent = dataObj[2].timeframes.daily.current + 'hrs';
    studyPrev.textContent = 'Last day - ' + dataObj[2].timeframes.daily.previous + 'hrs'
    exerHr.textContent = dataObj[3].timeframes.daily.current + 'hrs';
    exerPrev.textContent = 'Last day - ' + dataObj[3].timeframes.daily.previous + 'hrs'
    socialHr.textContent = dataObj[4].timeframes.daily.current + 'hrs';
    socialPrev.textContent = 'Last day - ' + dataObj[4].timeframes.daily.previous + 'hrs'
    selfHr.textContent = dataObj[5].timeframes.daily.current + 'hrs';
    selfPrev.textContent = 'Last day - ' + dataObj[5].timeframes.daily.previous + 'hrs'

})

weeklyClick.addEventListener('click', () => {
    //add and remove class (active)
    dailyClick.classList.remove('active')
    weeklyClick.classList.add('active')
    monthlyClick.classList.remove('active')

    //display weekly works
    workHr.textContent = dataObj[0].timeframes.weekly.current + 'hrs';
    workPrev.textContent = 'Last Week - ' + dataObj[0].timeframes.weekly.previous + 'hrs'
    playHr.textContent = dataObj[1].timeframes.weekly.current + 'hrs';
    playPrev.textContent = 'Last Week - ' + dataObj[1].timeframes.weekly.previous + 'hrs'
    studyHr.textContent = dataObj[2].timeframes.weekly.current + 'hrs';
    studyPrev.textContent = 'Last Week - ' + dataObj[2].timeframes.weekly.previous + 'hrs'
    exerHr.textContent = dataObj[3].timeframes.weekly.current + 'hrs';
    exerPrev.textContent = 'Last Week - ' + dataObj[3].timeframes.weekly.previous + 'hrs'
    socialHr.textContent = dataObj[4].timeframes.weekly.current + 'hrs';
    socialPrev.textContent = 'Last Week - ' + dataObj[4].timeframes.weekly.previous + 'hrs'
    selfHr.textContent = dataObj[5].timeframes.weekly.current + 'hrs';
    selfPrev.textContent = 'Last Week - ' + dataObj[5].timeframes.weekly.previous + 'hrs'

})

monthlyClick.addEventListener('click', () => {
    //add and remove class (active)
    monthlyClick.classList.add('active')
    weeklyClick.classList.remove('active')
    monthlyClick.classList.remove('active')

    //display monthly works
    workHr.textContent = dataObj[0].timeframes.monthly.current + 'hrs';
    workPrev.textContent = 'Last month - ' + dataObj[0].timeframes.monthly.previous + 'hrs'
    playHr.textContent = dataObj[1].timeframes.monthly.current + 'hrs';
    playPrev.textContent = 'Last month - ' + dataObj[1].timeframes.monthly.previous + 'hrs'
    studyHr.textContent = dataObj[2].timeframes.monthly.current + 'hrs';
    studyPrev.textContent = 'Last month - ' + dataObj[2].timeframes.monthly.previous + 'hrs'
    exerHr.textContent = dataObj[3].timeframes.monthly.current + 'hrs';
    exerPrev.textContent = 'Last month - ' + dataObj[3].timeframes.monthly.previous + 'hrs'
    socialHr.textContent = dataObj[4].timeframes.monthly.current + 'hrs';
    socialPrev.textContent = 'Last month - ' + dataObj[4].timeframes.monthly.previous + 'hrs'
    selfHr.textContent = dataObj[5].timeframes.monthly.current + 'hrs';
    selfPrev.textContent = 'Last month - ' + dataObj[5].timeframes.monthly.previous + 'hrs'

})