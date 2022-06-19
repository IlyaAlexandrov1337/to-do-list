import React, {Dispatch, FC, ChangeEvent} from 'react';
import Input from "../UI/Input/Input";
import css from './SortAndSearchForm.module.css'

export const enum filterValues {
    remark = 'remark',
    title = 'title',
    timeInc = 'timeInc',
    timeDec = 'timeDec'
}

type FilterFormProps = {
    handlerSort: Dispatch<React.SetStateAction<filterValues>>
    handlerSearch: Dispatch<React.SetStateAction<string>>
}


const SortAndSearchForm:FC<FilterFormProps> = ({handlerSort, handlerSearch}) => {
    const handleChangeSort = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        handlerSort(e.target.value as filterValues)
    }
    const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        handlerSearch(e.target.value)
    }
    return (
        <div className={css.main}>
            <h1>Сортировка и поиск</h1>
            <div className={css.content}>
                <select
                    defaultValue={filterValues.title}
                    onChange={handleChangeSort}
                >
                    <option value={filterValues.remark}>По типу</option>
                    <option value={filterValues.title}>По названию</option>
                    <option value={filterValues.timeDec}>По убавании даты создания</option>
                    <option value={filterValues.timeInc}>По возрастании даты создания</option>
                </select>
                <Input
                    onChange={handleChangeSearch}
                    type='text'
                    placeholder='Введите название цели'
                />
            </div>
        </div>
    );
};

export default SortAndSearchForm;
