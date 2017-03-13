/**
 * dev*******
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {

    var resultOut=20000;
    // console.log("timePoints: "+timePoints.length);
    var result = 20000;
    for(var i = 0; i < timePoints.length; i++) {
        // console.log("result: "+result);
        for(var j = i+1; j < timePoints.length; j++) {
            if(timePoints[j] !== undefined) {
                // console.log("time: "+timePoints[i]+"/ "+timePoints[j]);
                var time1 = timePoints[i].split(":");
                var time2 = timePoints[j].split(":");
                var diffHours = time1[0]-time2[0];
                var minute = 0;
                 
                hours = Math.abs(diffHours);
                hours = hours>12 ? 24-hours : hours;
                
                // console.log("h: "+hours);
                result = hours*60;

                if(diffHours > 0 && diffHours <=12) {
                    //time1 > time2
                    // console.log("hours > 0 && hours <=12");
                    // minute = Math.abs(time1[1]-time2[1]);
                    diff = time1[1]-time2[1];
                    result += diff;
                }
                else if(diffHours > 0 && diffHours > 12){
                    //time2 > time1
                    // console.log("hours > 0 && hours > 12");
                    diff = time2[1]-time1[1];
                    result += diff;
                    // minute = diff<0? diff + 60 : diff;
                }
                else if(diffHours < 0 && diffHours >= -12){
                    //time2 > time1
                    // console.log("hours < 0 && hours >= -12");
                    diff = time2[1]-time1[1];
                    result += diff;
                }
                else if(diffHours < 0 && diffHours < -12){
                    //time1 > time2
                    // console.log("hours < 0 && hours < -12");
                    diff = time1[1]-time2[1];
                    result += diff;
                    // minute = diff<0? diff + 60 : diff;
                }
                else if(diffHours == 0){
                    result = Math.abs(time1[1]-time2[1]);
                }               
            }

            if(result < resultOut){
                resultOut = result; 
            }
            result = 20000;
        }     
    }
    return resultOut;
};

console.log(findMinDifference(["23:59","23:00"])); // 59
console.log(findMinDifference(["23:59","00:00"])); // 1
console.log(findMinDifference(["02:59","23:00"])); // 239
console.log(findMinDifference(["10:00","23:00"])); // 660
console.log(findMinDifference(["23:59","10:00"])); // 601
console.log(findMinDifference(["6:59","2:00"])); // 299
console.log(findMinDifference(["00:00","23:59","00:00"])); // 0
console.log(findMinDifference(["01:01","02:01","03:00"])); // 59
console.log(findMinDifference(["23:00","23:59","00:00"])); // 1
console.log(findMinDifference(["02:59","23:00","10:00"])); // 239
console.log(findMinDifference(["14:49","09:56"])); // 293
console.log(findMinDifference(["14:49","01:02"])); // 613
console.log(findMinDifference(["01:02","09:56"])); // 534
console.log(findMinDifference(["14:49","09:56","01:02"])); // 293
