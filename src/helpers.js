let  NumbersFormat=(number)=> {
  if (number) {
    let numberStr=  number.toString();
    return `${numberStr.slice(0,2)}.${numberStr.slice(2,5)}.${numberStr.slice(5)}`;
  }
}
export default NumbersFormat