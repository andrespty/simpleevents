export const CheckPasswordsAreSame = (p1, p2) => {
    return p1 === p2
} 
export const CheckPassword = (inputtxt) => { 
    var passw = /^(?=.*\d)(?=.*[a-z]).{6,20}$/;
    if(inputtxt.match(passw)) { 
        return true;
    }
    else{ 
        return false;
    }
}

const months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
}

export const FormatDate = (string) => {
    let newString = string.split(' ')
    let date = newString[0].split('/')
    let time = newString[1]
    
    let month = months[date[0]]
    let day = date[1]
    let year = date[2]

    date = `${month} ${day}, ${year}`

    return {date, time}
}

export const join_date_time = (date, time) => {
    let newDate = date.toLocaleDateString()
    let newTime = time.toLocaleTimeString()
    let bar = new Date(`${newDate} ${newTime}`)
    return bar.toISOString()
}