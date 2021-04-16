const teens = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fiftenn','sixtenn','seventeen','nineteen']
//teens has the string value corespnding to the array index (except 0)

if(!!process.argv) {//running in node with arguments
    console.log(convertTime(process.argv[2],process.argv[3]));
}

function convertTime(hours,minutes) {// main function
    result = '';
    trimmed = trim(hours,minutes);//fixes incorrect inputs
    if(trimmed.m===0) {//no minutes, return and end function
        return teens[trimmed.h]+" o' clock";
    }
    result = minConvert(trimmed.m);//converts min to string
    if(trimmed.h===12) {//handles wraparound if 12 hours
        result += trimmed.m<30? 'one': 'twelve';
    }
    else {
        result += trimmed.m<=30? teens[trimmed.h] : teens[trimmed.h+1];//handles hour values for first or last half of hour
    }
    return result;
}

function trim(h,m) {//removes any hours over 12 and minutes over 60
    if(m>=60) {// if over, removes every 60 minutes and adds to hours
        h += Math.trunc(m/60);
        m = m%60;
    }
    h = h>12!=h? h%12: h;// removes every 12 hours
    return {'h':h,'m':m};
}

function minConvert(m) {//converts min to string
    result = '';

    if(m===30) {//returns half past and exits function
        return 'half past ';
    }
    else if(m%15===0) {//handles quarters, will function incorrectly if 0 minutes inputted, I handled this in the main
        result =  'quarter';
    }
    else if(m<20||m>40) {//for values in the teens, first and second half of the hour
        result = m<20? teens[m] : teens[60-m];
    }
    else {//deals with the twentiesm first and second half of hour
        result = 'twenty';
        result += m<30? ' '+teens[m-20] : ' '+teens[40-m];
    }
    if(m%15!==0){//handles adding 'minutes' string, 'minute' for 1 min
        result += m===1? ' minute' : ' minutes';
    }
    result += m>30? ' to ' : ' past ';//half past ten or quarter to ten
    return result
}

module.exports = convertTime;