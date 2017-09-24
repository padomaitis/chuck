const formatDate = (date) => {
    const year = date.getFullYear();
    const month = addZero(date.getMonth()+1);
    const day = addZero(date.getDay()+1);
    return year+'-'+month+'-'+day;
}

const addZero = (number) => {
    return number < 10 ? '0' + number : number;
}

export default formatDate;