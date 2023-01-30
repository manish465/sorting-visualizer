import { useEffect, useState } from "react";
import { bubbleSortAsc, bubbleSortDec } from "../algorithm/bubbleSort";
import AppBar from "./AppBar";
import Bar from "./Bar";

const SortPanal = () => {
    const [arrLen, setArrLen] = useState(20);
    const [range, setRange] = useState({ min: 10, max: 200 });
    const [arr, setArr] = useState([]);
    const [isSorting, setIsSorting] = useState(false);
    const [ascending, setAscending] = useState(true);

    const genrateArray = () => {
        setIsSorting(false);
        const currentArr = [];

        for (let i = 0; i < arrLen; i++) {
            currentArr.push(
                Math.floor(
                    Math.random() * (range.max - range.min + 1) + range.min
                )
            );
        }

        setArr(currentArr);
    };

    useEffect(() => {
        genrateArray();
    }, [range.max, range.min, arrLen]);

    useEffect(() => {
        if (isSorting) {
            const currentArr = arr.slice();
            ascending
                ? bubbleSortAsc(currentArr, setArr)
                : bubbleSortDec(currentArr, setArr);
        }
    }, [isSorting, arr, ascending]);

    return (
        <div className="panal-wrapper">
            <div className="panal">
                {arr.map((ele, key) => (
                    <Bar key={key} ele={ele} />
                ))}
            </div>
            <AppBar
                arrLen={arrLen}
                range={range}
                setArrLen={setArrLen}
                setRange={setRange}
                setIsSorting={setIsSorting}
                genrateArray={genrateArray}
                isSorting={isSorting}
                ascending={ascending}
                setAscending={setAscending}
            />
        </div>
    );
};

export default SortPanal;
