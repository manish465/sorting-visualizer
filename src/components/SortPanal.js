import { useEffect, useState } from "react";

const SortPanal = () => {
    const [arrLen, setArrLen] = useState(10);
    const [arr, setArr] = useState([100, 36, 56, 74, 10, 23, 35, 65, 78, 98]);
    const [sorting, setSorting] = useState(false);

    useEffect(() => {
        if (sorting) {
            const currentArr = arr.slice();

            for (let i = 0; i < currentArr.length; i++) {
                for (let j = 0; j < currentArr.length - i - 1; j++) {
                    if (currentArr[j] > currentArr[j + 1]) {
                        const temp = currentArr[j];
                        currentArr[j] = currentArr[j + 1];
                        currentArr[j + 1] = temp;
                        setArr(currentArr);
                    }
                }
            }
        }
    }, [sorting, arr]);

    return (
        <div className="panal-wrapper">
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
