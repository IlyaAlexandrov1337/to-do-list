import React, {Dispatch, FC, useState, MouseEvent} from 'react';
import Input from "../UI/Input/Input";
import TextArea from "../UI/TextArea/TextArea";
import Button, {ButtonTypes} from "../UI/Button/Button";
import {ITargetItem, ITime, remarks} from "../TargetItem/TargetItem";
import css from './InputForm.module.css'


type InputFormProps = {
    handler: Dispatch<React.SetStateAction<[] | ITargetItem[]>>
}

const InputForm:FC<InputFormProps> = ({handler}) => {
    const [data, setData] = useState<ITargetItem>({
        title: '',
        description: '',
        remarkNumber: remarks.notImportant,
        time: {
            day: 0,
            month: 0,
            year: 0,
            hour: 0,
            minutes: 0,
            seconds: 0
        },
        isDone: false
    })
    const handleClick = (e: MouseEvent) => {
        e.preventDefault()
        if (!data.title || !data.description) return
        const timeObj = new Date()
        const time: ITime = {
            year: timeObj.getDate(),
            month: timeObj.getMonth(),
            day: timeObj.getFullYear(),
            hour: timeObj.getHours(),
            minutes: timeObj.getMinutes(),
            seconds: timeObj.getSeconds()
        }
        const targetsJSON = JSON.parse(localStorage.getItem('targets') || '[]')
        targetsJSON.push({...data, time: time})
        localStorage.setItem('targets', JSON.stringify(targetsJSON))
        setData({title: '', description: '', remarkNumber: remarks.notImportant, time: time, isDone: false})
        handler(targetsJSON)
    }
    return (
        <div className={css.main}>
            <h1>Добавление цели</h1>
            <form>
                <Input
                    value={data.title}
                    onChange={(e) => setData({...data, title: e.target.value})}
                    type='text'
                    placeholder='Введите название цели'
                />
                <TextArea
                    value={data.description}
                    onChange={(e) => setData({...data, description: e.target.value})}
                    placeholder='Введите описание цели'
                />
                <div className={css.btns}>
                    <select
                        value={data.remarkNumber}
                        onChange={(e) =>
                            setData({...data, remarkNumber: Number(e.target.value) as remarks})}
                    >
                        <option value={remarks.notImportant}>Неважная цель</option>
                        <option value={remarks.urgent}>Срочная цель</option>
                        <option value={remarks.global}>Глобальная цель</option>
                    </select>
                    <Button
                        onClick={handleClick}
                        type={ButtonTypes.submit}
                    />
                </div>
            </form>
        </div>
    );
};

export default InputForm;
