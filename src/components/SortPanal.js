import { useEffect, useState } from "react";
import AppBar from "./AppBar";

const SortPanal = () => {
    const [arrLen, setArrLen] = useState(10);
    const [range, setRange] = useState({ min: 10, max: 100 });
    const [arr, setArr] = useState([]);
    const [isSorting, setIsSorting] = useState(false);

    useEffect(() => {
        const currentArr = [];

        for (let i = 0; i < arrLen; i++) {
            currentArr.push(
                Math.floor(
                    Math.random() * (range.max - range.min + 1) + range.min
                )
            );
        }

        setArr(currentArr);
    }, [range.max, range.min, arrLen]);

    const bubbleSort = () => {
        const currentArr = arr.slice();

        for (let i = 0; i < currentArr.length; i++) {
            for (let j = 0; j < currentArr.length - i - 1; j++) {
                setTimeout(() => {
                    if (currentArr[j] > currentArr[j + 1]) {
                        const temp = currentArr[j];
                        currentArr[j] = currentArr[j + 1];
                        currentArr[j + 1] = temp;
                        setArr(currentArr);
                    }
                }, 300);
            }
        }
    };

    useEffect(() => {
        if (isSorting) {
            bubbleSort();
        }
    }, [isSorting, arr]);

    return (
        <div className="panal-wrapper">
            <div className="panal">
                {arr.map((ele, key) => (
                    <span key={key}>{ele.toString()}</span>
                ))}
            </div>
            <AppBar
                arrLen={arrLen}
                range={range}
                setArrLen={setArrLen}
                setRange={setRange}
                setIsSorting={setIsSorting}
            />
        </div>
    );
};

export default SortPanal;
