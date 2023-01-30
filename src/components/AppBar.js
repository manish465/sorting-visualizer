const AppBar = ({ arrLen, range, setArrLen, setRange, setIsSorting }) => {
    return (
        <header>
            <section>
                <label htmlFor="array-length">Array Length</label>
                <input
                    type="number"
                    name="array-length"
                    value={arrLen}
                    onChange={(e) => setArrLen(e.target.value)}
                />
            </section>
            <section>
                <label htmlFor="array-length">Minimum</label>
                <input
                    type="number"
                    name="min"
                    value={range.min}
                    onChange={(e) =>
                        setRange((val) => ({ ...val, min: e.target.value }))
                    }
                />
            </section>
            <section>
                <label htmlFor="array-length">Maximum</label>
                <input
                    type="number"
                    name="max"
                    value={range.max}
                    onChange={(e) =>
                        setRange((val) => ({ ...val, max: e.target.value }))
                    }
                />
            </section>
            <button
                onClick={() => {
                    setIsSorting(true);
                }}
            >
                Sort
            </button>
        </header>
    );
};

export default AppBar;
