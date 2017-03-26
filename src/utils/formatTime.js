/**
 * Created by Administrator on 2017/3/25.
 */

//将数组转为字符串，如果数字只有一位，会在第一个位置添加一个0
//9->9->09
const appendZero = n => n.toLocaleString({}, {minimumIntegerDigits: 2});

export default function formatTime(t = 0) {
    const msec = appendZero(t % 100),
        sec = appendZero(parseInt((t / 100) % 60)),
        min = appendZero(parseInt((t / 6000) % 60)),
        hour = appendZero(parseInt(t / 360000));
    return `${hour}:${min}:${sec}.${msec}`;
}
