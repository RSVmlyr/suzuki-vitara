const rankingPosition = (data) => {
    const result = data.filter((datum, i) => {
        if(i < 3) {
            return data;
        }
    })
    return result;
}

export default rankingPosition;