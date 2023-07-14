const effects = [];
const useEffect = (cb) => {
    effects.push({
        cb,
    });
    console.log(effects);
};

export default useEffect;
export { effects };
