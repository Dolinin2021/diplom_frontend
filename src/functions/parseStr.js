export default function parseStr(address) {
    console.log(typeof(address));
    let res = '';
    arr = address.split('/');
    res = arr[0] + '//' + arr[1] + arr[2] + '/backend' + '/' + arr[3] + '/' + arr[4] + '/' + arr[5] + '/' + arr[6];
    return res;
};
