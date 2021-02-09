import React, {useState} from 'react'
import styles from './pagination.module.css'

type PropsType = {
    totalUsersCount: number,
    pageSize: number,
    portionSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void
}
const Pagination: React.FC<PropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize )
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionSize = props.portionSize || 10
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionSize * portionNumber
    return (
        <div>
            { portionNumber > 1 &&
            <button onClick={() => setPortionNumber(portionNumber - 1)}>LEFT</button>}

            {pages
                .filter(p => p>= leftPortionPageNumber && p<= rightPortionPageNumber)
                .map(p => {
                    return <span onClick={() => props.onPageChanged(p)}
                                 className={props.currentPage === p ? styles.selectedPage: undefined}>{p} </span>
                })}

            { portionCount > portionNumber &&
            <button onClick={ ()=> setPortionNumber(portionNumber + 1)}>RIGHT</button>
            }
        </div>
    )
}

export {Pagination}