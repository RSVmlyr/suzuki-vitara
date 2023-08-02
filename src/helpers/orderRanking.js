const orderRanking = (data) => {

    const copyData = [...data];

    const clearData = copyData.map((data) => {
        if(data.likes === null) {
            data.likes = '0';
        }
        data.likes = parseInt(data.likes)

        return data
    })
    // console.log(clearData);
    const result = clearData.sort((a, b) => {
        return parseInt(b.likes) - parseInt(a.likes);
    })

    return result;
}

export default orderRanking;