
const get = (url, fn) => {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(data => data.json())
        .then(res => {
            fn(res);
            resolve({
                message: 'success'
            })
        })
        .catch(err => reject(err));
    })
}

let updateUi = (res) => {
    let { man } = res;
    let trashMan = `
        <h2>${man} to take out trash next</h2>
    `
    document.getElementById('trash-container').innerHTML = trashMan;
}

const url = 'https://parker-house.herokuapp.com/current-person';

get(url, updateUi)
    .then(response => {
        console.log(response.message);
    })
    .catch(err => {
        console.log(err)
    })

var nextPersonButton = document.getElementById('next-button');

nextPersonButton.addEventListener('click', (e) => {
    var url = 'https://parker-house.herokuapp.com/next-person';
    get(url, updateUi).then(res => {
        console.log(res.message);
    });
})

