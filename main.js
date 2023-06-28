const titles = document.querySelectorAll('.title')
const times = document.querySelectorAll('.time')
const timeFrames = document.querySelectorAll('.timeFrame')

const dailyButton = document.getElementById('daily')
const weeklyButton = document.getElementById('weekly')
const monthlyButton = document.getElementById('monthly')

for(let i=0; i<titles.length; i++){
    fetch('data.json')
    .then((response)=>response.json())
    .then((data)=>{
        // This is the default state
        titles[i].textContent = data[i].title
        times[i].textContent = `${data[i].timeframes.weekly.current}hrs`
        timeFrames[i].textContent = `Last Week - ${data[i].timeframes.weekly.previous}hrs`
        weeklyButton.style.color = '#fff'
        
        dailyButton.addEventListener('click', showDailyData)
        weeklyButton.addEventListener('click', showWeeklyData)
        monthlyButton.addEventListener('click', showMonthlyData)


        // Upon clicking the 'daily' , 'weekly' and 'monthly' button, it will change the content
        function showDailyData(){
            times[i].textContent = `${data[i].timeframes.daily.current}hrs`
            timeFrames[i].textContent = `Last Day - ${data[i].timeframes.daily.previous}hrs`
            dailyButton.style.color = '#fff'
            weeklyButton.style.color = '#6f76c8'
            monthlyButton.style.color = '#6f76c8'
        }

        function showWeeklyData(){
            times[i].textContent = `${data[i].timeframes.weekly.current}hrs`
            timeFrames[i].textContent = `Last Week - ${data[i].timeframes.weekly.previous}hrs`
            dailyButton.style.color = '#6f76c8'
            weeklyButton.style.color = '#fff'
            monthlyButton.style.color = '#6f76c8'
            }

        function showMonthlyData(){
            times[i].textContent = `${data[i].timeframes.monthly.current}hrs`
            timeFrames[i].textContent = `Last Month - ${data[i].timeframes.monthly.previous}hrs`
            dailyButton.style.color = '#6f76c8'
            weeklyButton.style.color = '#6f76c8'
            monthlyButton.style.color = '#fff'
        }
    })
}
