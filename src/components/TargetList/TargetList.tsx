import React, {Dispatch, FC} from 'react';
import css from './TargetList.module.css'
import TargetItem, {ITargetItem} from "../TargetItem/TargetItem";

type TargetListProps = {
    targets: ITargetItem[],
    handler: Dispatch<React.SetStateAction<[] | ITargetItem[]>>
}

const TargetList: FC<TargetListProps> = ({targets, handler}) => {
    if (!targets.length) return  <h1>Список целей пуст</h1>
    return (
        <div className={css.list}>
            {targets.map(item => <TargetItem
                handler={handler}
                key={item.title+item.description+item.remarkNumber}
                {...item}
            />)}
        </div>
    );
};

export default TargetList;
