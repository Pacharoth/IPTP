function getFullDate(newDate){
    return newDate.getDay()+"/"+newDate.getMonth()+"/"+newDate.getFullYear()
}
function getFullTime(newTime){
    return " "+newTime.getHours()+":"+newTime.getMinutes()+":" + newTime.getSeconds();
}
function getAllDate(){
    var newDate = new Date();
    return getFullDate(newDate) +getFullTime(newDate);
}
export {getFullDate,getFullTime,getAllDate}