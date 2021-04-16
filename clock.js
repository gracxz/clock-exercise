const teens = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fiftenn','sixtenn','seventeen','nineteen'];

function convertTime(hours,minutes) {
    result = '';
    trimmed = trim(hours,minutes);
    if(trimmed.m===0) {
        return teens[trimmed.h]+" o' clock";
    }
    result = minConvert(trimmed.m);
    if(trimmed.h===12) {
        result += trimmed.m<30? 'one': 'twelve';
    }
    else {
        result += trimmed.m<=30? teens[trimmed.h] : teens[trimmed.h+1];
    }
    return result;
}

function trim(h,m) {
    if(m>60) {
        h += Math.trunc(m/60);
        m = m%60;
    }
    h = h>12!=h? h%12: h;
    return {'h':h,'m':m};
}

function minConvert(m) {
    result = '';

    if(m===30) {
        return 'half past ';
    }
    else if(m%15===0) {
        result =  'quarter';
    }
    else if(m<20||m>40) {
        result = m<20? teens[m] : teens[60-m];
    }
    else {
        result = 'twenty';
        result += m<30? ' '+teens[m-20] : ' '+teens[40-m];
    }
    if(m%15!==0){
        result += m===1? ' minute' : ' minutes';
    }
    result += m>30? ' to ' : ' past ';
    return result
}

module.exports = convertTime;