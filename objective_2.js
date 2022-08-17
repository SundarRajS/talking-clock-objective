function printTimeToWord(h, m) {
    if (h > 24 || m > 60 || isNaN(m) || isNaN(h)) {
        throw Error("Invalid time args, Please check the input time");
    } else {
        let nums = ["zero", "one", "two", "three", "four",
            "five", "six", "seven", "eight", "nine",
            "ten", "eleven", "twelve", "thirteen",
            "fourteen", "fifteen", "sixteen", "seventeen",
            "eighteen", "nineteen", "twenty", "twenty one",
            "twenty two", "twenty three", "twenty four",
            "twenty five", "twenty six", "twenty seven",
            "twenty eight", "twenty nine",
        ];
        if((h == 0 && m == 0) || (h == 24 && m == 0)){
            console.log(`twelve o clock`);
        }
        else if (m == 0) {
            console.log(`${nums[h]} o'clock`);
        } else if (m == 1) {
            console.log(`one past ${nums[h]}`);
        }
        else if (m == 59) {
            let hr = (h % 12) + 1;
            console.log(`one minute to ${nums[hr]}`)
        } else if (m == 15) {
            console.log(`quarter past ${nums[h]}`);
        } else if (m == 30) {
            console.log(`half past ${nums[h]}`);
        } else if (m == 45) {
            let hr = (h % 12) + 1;
            console.log(`quarter past to ${nums[hr]}`);
        } else if (m <= 30) {
            console.log(`${nums[m]} past ${nums[h]}`);
        }
        else if (m > 30) {
            let mins = (60 - m);
            let hr = (h % 12) + 1;
            console.log(`${nums[mins]} to ${nums[hr]}`);
        }
    }
}

console.log(`********* Application to Print the User Input in words ************************`)
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Enter the time in hh:mm\n`, time => {
    try {
        hours = parseInt(time.split(':')[0]);
        if(hours > 12) {
            hours = hours % 12;
        }
        minutes = parseInt(time.split(':')[1]);
        printTimeToWord(hours, minutes);
        readline.close();
    } catch (error) {
        console.log(`exception occurred. please check your input`);
    }
});

