import React, { useState } from "react";
import classes from "./Paginator.module.css"


const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged}) =>{
    let portionSize = 10;
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionBorder = (portionNumber - 1) * portionSize + 1;
    let rightPortionBorder = portionNumber * portionSize;


    return(
        <div className={classes.paginator}>
            {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber-1)}>prev</button>}
            <div className={classes.pages}>
                {pages
                    .filter(p => p >= leftPortionBorder && p <= rightPortionBorder)
                    .map(p => {
                    return <span className={`${currentPage === p && classes.selectedPage} ${classes.page}`} 
                        onClick={(e) => onPageChanged(p)}> {p} </span>
                })}
            </div>
            {portionNumber < portionCount && <button onClick={() => setPortionNumber(portionNumber+1)}>next</button>}
        </div>
    )
}

export default Paginator;