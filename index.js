let btn = document.getElementById('btn');
let salary = document.getElementById('salary');
let workDay = document.getElementById('workDay');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(salary.value != " " && workDay.value != " "){
        let days = getDaysInMonth(new Date().getMonth() + 1, new Date().getFullYear());
        results.value = ( salary.value/days ) * workDay.value;
        console.log(( salary.value/days ) * workDay.value)
    }
})

function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}