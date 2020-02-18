const month = {
    '01' : 'Jan',
    '02' : 'Feb',
    '03' : 'Mar',
    '04' : 'Apr',
    '05' : 'May',
    '06' : 'Jun',
    '07' : 'Jul',
    '08' : 'Aug',
    '09' : 'Sep',
    '10' : 'Oct',
    '11' : 'Nov',
    '12' : 'Dec'
}

export default function(date){
    let monthS = date.slice(5, 7)


    let tempMonth = month[monthS]

    return date.slice(8, 10) + ' ' + tempMonth + ', ' + date.slice(0, 4)
}