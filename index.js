
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
    let { name } = res;
    let trashMan = `
        <h2>${name} to take out trash next</h2>
    `
    document.getElementById('trash-container').innerHTML = trashMan;
}
console.log(window.location.href);

const baseUrl = (window.location.href.startsWith('file://')) ? 'http://localhost:3000': 'https://parker-house.herokuapp.com';
get(`${baseUrl}/current-person`, updateUi)
    .then(response => {
        console.log(response.message);
    })
    .catch(err => {
        console.log(err)
    })

var nextPersonButton = document.getElementById('next-button');

nextPersonButton.addEventListener('click', (e) => {
    var url = `${baseUrl}/next-person`;
    get(url, updateUi).then(res => {
        console.log(res.message);
    });
})

