import React, {useMemo, useState} from 'react';
import InputForm from "./components/InputForm/InputForm";
import './App.css'
import TargetList from "./components/TargetList/TargetList";
import {ITargetItem} from "./components/TargetItem/TargetItem";
import {srtTimeDec, srtTimeInc, srtTitle} from "./helpers/sortFunctions";
import SortAndSearchForm, {filterValues} from "./components/SortAndSearchForm/SortAndSearchForm";

const App = () => {
    const [targets, setTargets] =
        useState<ITargetItem[] | []>(JSON.parse(localStorage.getItem('targets') || '[]'))
    const [selectedSortValue, setSelectedSortValue] = useState<filterValues>(filterValues.title)
    const [searchValue, setSearchValue] = useState<string>('')

    const sortedTargets = useMemo(() => {
        switch (selectedSortValue) {
            case (filterValues.remark):
                return [...targets].sort((a, b) => a.remarkNumber - b.remarkNumber)
            case (filterValues.title):
                return [...targets].sort(srtTitle)
            case (filterValues.timeInc):
                return [...targets].sort(srtTimeInc)
            case (filterValues.timeDec):
                return [...targets].sort(srtTimeDec)
        }
    }, [selectedSortValue, targets])

    const searchAndSortedTargets = useMemo(() => {
        if (!searchValue) return sortedTargets
        return ([...sortedTargets].filter(a => a.title.includes(searchValue)))
    }, [searchValue, sortedTargets])

    return (
        <div className="App">
            <InputForm handler={setTargets}/>
            <SortAndSearchForm handlerSearch={setSearchValue} handlerSort={setSelectedSortValue} />
            <TargetList handler={setTargets} targets={searchAndSortedTargets} />
        </div>
    );
};

export default App;
