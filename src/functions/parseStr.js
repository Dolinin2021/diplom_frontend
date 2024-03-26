export default function parseStr(address) {
    let strAddress = String(address)
    let res = '';
    res = strAddress.split('/');
    res = res[2] + '/backend' + '/' + res[3] + '/' + res[4] + '/' + res[5] + '/' + res[6]
    return res;
};
