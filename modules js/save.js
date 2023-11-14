function getData(key) {
    return JSON.parse(localStorage.getItem(key))??[]
}



function saveData(key, data) {
const convertData = JSON.stringify(data)
    localStorage.setItem(key, convertData)
}

export{getData,saveData}