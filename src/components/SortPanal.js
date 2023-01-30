import { useEffect, useState } from "react";

const SortPanal = () => {
    const [arrLen, setArrLen] = useState(10);
    const [range, setRange] = useState({ min: 10, max: 100 });
    const [arr, setArr] = useState([]);
    const [sorting, setSorting] = useState(false);

    useEffect(() => {
        const currentArr = [];

        for (let i = 0; i < arrLen; i++) {
            currentArr.push(
                Math.floor(Math.random() * (range.max - range.min) + range.min)
            );
        }

        setArr(currentArr);
    }, [range.max, range.min, arrLen]);

    useEffect(() => {
        if (sorting) {
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
        }
    }, [sorting, arr]);

    return (
        <div className="panal-wrapper">
            <input
                type="number"
                name="array-length"
                value={arrLen}
                onChange={(e) => setArrLen(e.target.value)}
            />
            <input
                type="number"
                name="min"
                value={range.min}
                onChange={(e) =>
                    setRange((val) => ({ ...val, min: e.target.value }))
                }
            />
            <input
                type="number"
                name="max"
                value={range.max}
                onChange={(e) =>
                    setRange((val) => ({ ...val, max: e.target.value }))
                }
            />
            <div className="panal">
                {arr.map((ele, key) => (
                    <span key={key}>{ele.toString()}</span>
                ))}
            </div>
            <button onClick={() => setSorting(true)}>Sort</button>
        </div>
    );
};

export default SortPanal;
