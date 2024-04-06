function watch(){
    var date=new Date;
    var hour,min=(date.getMinutes()<10)?"0"+ date.getMinutes():date.getMinutes(),
        sec=(date.getSeconds()<10)?"0"+ date.getSeconds():date.getSeconds(),
        m=(date.getHours()>=12)?"AM":"PM"


    if(date.getHours()==0){
        hour=12;
    }else if (date.getHours()>=12){
        hour=date.getHours()-12;
    }else{
        hour=date.getHours();
    }

    var currentTime=hour+":"+min+":"+sec;
    document.getElementsByClassName("Time")[0].innerHTML=currentTime;
    document.getElementsByClassName("AM/PM")[0].innerHTML=m;
    

    var day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        month=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November","December"],
        myDate=date.getDate();

    var currentDate=day[date.getDate()]+","+month[date.getMonth()]+","+myDate;
    document.getElementsByClassName("Date")[0].innerHTML=currentDate;
}

watch();
setInterval(function(){
    watch();
},1000);