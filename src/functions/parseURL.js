export default function parseURL(address) {
    let str = '';
    let data = String(address);
    let arr = data.split('undefined');
    str = arr[0] + arr[1];
    return str;
}
