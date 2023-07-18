const effects = [];
const useEffect = (cb) => {
    effects.push({
        cb,
    });
};

export default useEffect;
export { effects };
