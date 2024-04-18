export function getCurrentDate(): string {
    let today = new Date();
    let day = today.getDate();
    if (day < 10) day = '0' + day;

    let mm = today.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = today.getFullYear();
    let currentDate = `${day}.${mm}.${yy}`;
    return currentDate;
    
}