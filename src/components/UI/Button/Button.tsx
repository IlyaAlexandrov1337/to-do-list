import React, { FC, MouseEvent } from 'react';
import css from './Button.module.css'

export enum ButtonTypes {
    delete = "delete",
    done = "done",
    remark = "remark",
    submit = "submit",
}

type ButtonType = {
    type: ButtonTypes,
    onClick: (e: MouseEvent) => void
    isDisabled?: boolean
}

const Button: FC<ButtonType> = ({type, onClick, isDisabled}) => {
    switch (type) {
        case ButtonTypes.delete:
        return (
                <button className={css.delete} onClick={onClick}>
                    Удалить
                </button>
            );
        case ButtonTypes.done:
            return (
                <button disabled={isDisabled} className={css.done} onClick={onClick}>
                    {isDisabled ? 'Выполнено' : 'Пометить как выполненное'}
                </button>
            );
        case ButtonTypes.remark:
            return (
                <button className={css.remark} onClick={onClick}>
                    Поменять метку
                </button>
            );
        case ButtonTypes.submit:
            return (
                <button className={css.submit} onClick={onClick}>
                    Добавить цель
                </button>
            );
    }
};

export default Button;
