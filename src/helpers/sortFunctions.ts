import {ITargetItem} from "../components/TargetItem/TargetItem";

export function srtTitle (a: ITargetItem, b: ITargetItem): number {
    if (a.title < b.title) return -1
    if (a.title > b.title) return 1
    return 0
}
export function srtTimeInc (a: ITargetItem, b: ITargetItem): number {
    if (a.time.year < b.time.year) return -1
    if (a.time.year > b.time.year) return 1
    if (a.time.month < b.time.month) return -1
    if (a.time.month > b.time.month) return 1
    if (a.time.day < b.time.day) return -1
    if (a.time.day > b.time.day) return 1
    if (a.time.hour < b.time.hour) return -1
    if (a.time.hour > b.time.hour) return 1
    if (a.time.minutes < b.time.minutes) return -1
    if (a.time.minutes > b.time.minutes) return 1
    if (a.time.seconds < b.time.seconds) return -1
    if (a.time.seconds > b.time.seconds) return 1
    return 0
}

export function srtTimeDec (a: ITargetItem, b: ITargetItem): number {
    if (a.time.year < b.time.year) return 1
    if (a.time.year > b.time.year) return -1
    if (a.time.month < b.time.month) return 1
    if (a.time.month > b.time.month) return -1
    if (a.time.day < b.time.day) return 1
    if (a.time.day > b.time.day) return -1
    if (a.time.hour < b.time.hour) return 1
    if (a.time.hour > b.time.hour) return -1
    if (a.time.minutes < b.time.minutes) return 1
    if (a.time.minutes > b.time.minutes) return -1
    if (a.time.seconds < b.time.seconds) return 1
    if (a.time.seconds > b.time.seconds) return -1
    return 0
}
