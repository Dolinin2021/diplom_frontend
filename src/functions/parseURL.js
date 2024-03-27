export default function parseURL(address) {
    let str = '';
    let arr = address.split('undefined');
    str = arr[0] + 'backend/' + arr[1];
    return str;
}
