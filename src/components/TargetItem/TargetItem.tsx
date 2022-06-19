import React, {Dispatch, FC, MouseEvent} from 'react';
import Button, {ButtonTypes} from "../UI/Button/Button";
import css from './TargetItem.module.css'

export enum remarks {
    urgent,
    global,
    notImportant
}

const format = (a: remarks) : string => {
    switch (a) {
        case remarks.global:
            return 'Глобальная цель'
        case remarks.notImportant:
            return 'Неважная цель'
        case remarks.urgent:
            return 'Срочная цель'
    }
}

export interface ITime {
    day: number,
    month: number,
    year: number,
    hour: number,
    minutes: number,
    seconds: number
}

export interface ITargetItem {
    title: string,
    description: string,
    remarkNumber: remarks,
    time: ITime,
    isDone: boolean
}

interface ITargetItemHandled extends ITargetItem {
    handler: Dispatch<React.SetStateAction<[] | ITargetItem[]>>
}

const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

const TargetItem: FC<ITargetItemHandled> = (
    {title, description, remarkNumber, time,isDone, handler}) => {
    const handleClickDelete = (e: MouseEvent) => {
        e.preventDefault()
        const targetsJSON = JSON.parse(localStorage.getItem('targets')!)
        const index = targetsJSON.findIndex((target : ITargetItemHandled) => JSON.stringify(target.time)
            === JSON.stringify(time))
        targetsJSON.splice(index, 1);
        localStorage.setItem('targets', JSON.stringify(targetsJSON))
        handler(targetsJSON)
    }
    const handleClickDone = (e: MouseEvent) => {
        e.preventDefault()
        const targetsJSON = JSON.parse(localStorage.getItem('targets')!)
        const index = targetsJSON.findIndex((target : ITargetItemHandled) => JSON.stringify(target.time)
            === JSON.stringify(time))
        targetsJSON[index].isDone = true
        localStorage.setItem('targets', JSON.stringify(targetsJSON))
        handler(targetsJSON)
    }
    return (
        <div className={isDone ? css.item__main_done : css.item__main}>
            <div className={css.item__title}>
                <h1>{title}</h1>
                <Button isDisabled={isDone} type={ButtonTypes.done} onClick={handleClickDone}/>
            </div>
            <div className={css.item__content}>
                <span>{description}</span>
                <div className={css.item__aside}>
                    <span>{format(remarkNumber)}</span>
                    <span>{`${time.year}/${pad(time.month)}/${pad(time.day)}`}</span>
                    <span>{`в ${pad(time.hour)}:${pad(time.minutes)}:${pad(time.seconds)}`}</span>
                </div>
            </div>
            <div className={css.item__btns} style={{alignSelf: "flex-end"}}>
                <Button type={ButtonTypes.delete} onClick={handleClickDelete}/>
            </div>
        </div>
    );
};

export default TargetItem;
