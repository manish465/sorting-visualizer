import { AiFillPlayCircle } from "react-icons/ai";
import { FaRandom } from "react-icons/fa";

const AppBar = ({
    arrLen,
    range,
    setArrLen,
    setRange,
    setIsSorting,
    genrateArray,
    isSorting,
}) => {
    return (
        <header>
            <section>
                <label htmlFor="array-length">Array Length : </label>
                <input
                    type="number"
                    name="array-length"
                    min={5}
                    max={250}
                    value={arrLen}
                    onChange={(e) => setArrLen(e.target.value)}
                />
            </section>
            <section>
                <label htmlFor="array-length">Minimum : </label>
                <input
                    type="number"
                    name="min"
                    min={10}
                    max={450}
                    value={range.min}
                    onChange={(e) =>
                        setRange((val) => ({ ...val, min: e.target.value }))
                    }
                />
            </section>
            <section>
                <label htmlFor="array-length">Maximum : </label>
                <input
                    type="number"
                    name="max"
                    min={10}
                    max={450}
                    value={range.max}
                    onChange={(e) =>
                        setRange((val) => ({ ...val, max: e.target.value }))
                    }
                />
            </section>
            <AiFillPlayCircle
                className="sort"
                color={isSorting ? "#808080" : "#f5deb3"}
                size="80px"
                onClick={() => setIsSorting(true)}
            />
            <FaRandom
                className="sort"
                color="#f5deb3"
                size="80px"
                onClick={genrateArray}
            />
        </header>
    );
};

export default AppBar;
