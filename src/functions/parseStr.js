export default function parseStr(address) {
    let str = '';
    let arr = address.split('/');
    str = arr[0] + '//' + arr[1] + arr[2] + '/backend' + '/' + arr[3] + '/' + arr[4] + '/' + arr[5] + '/' + arr[6];
    return str;
}
