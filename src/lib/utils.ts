export function dateFormat(date:string,fmt = 'YYYY-mm-dd HH:MM:SS') :string{
    let ret;
    
    let dateTime = new Date(date)
    const timeDiff = 1000 * 60 * 60 * 8
    const timeStamp = dateTime.getTime()
    dateTime = new Date(timeStamp - timeDiff)
    
    const opt = {
        "Y+": dateTime.getFullYear().toString(),        // 年
        "m+": (dateTime.getMonth() + 1).toString(),     // 月
        "d+": dateTime.getDate().toString(),            // 日
        "H+": dateTime.getHours().toString(),           // 时
        "M+": dateTime.getMinutes().toString(),         // 分
        "S+": dateTime.getSeconds().toString()          // 秒
    };
    for (const k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}