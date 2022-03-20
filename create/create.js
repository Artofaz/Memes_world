/*fetch('https://api.imgflip.com/get_memes')
.then(res => res.json())
.then(data => {
    let title = '<ul>'
    for(let meme of data.data.memes){
        title += `<li>${meme.name}</li>`;
        title += `<img src='${meme.url}' width='25%' height='25%'></im>`
    }
    title += '</ul>'
    document.querySelector('#title').innerHTML = title;
});*/


const urlIMG = sessionStorage.getItem('templateURL');
const templateID = sessionStorage.getItem('templateID')
console.log(templateID);
console.log(urlIMG);


$(document).ready(function(){

document.getElementById('baseimg').src = urlIMG;

document.getElementById('submit_btn_post').addEventListener('click', () => {

    let txt0 = document.getElementById('edittext0').value;
    let txt1 = document.getElementById('edittext1').value;

    fetch(`https://api.imgflip.com/caption_image?template_id=${templateID}&username=Artofaz&password=newPSW12&text0=${txt0}&text1=${txt1}`)
        .then(res => res.json())
        .then(data => {
                $('#title').append(`
                <p id='credit' >Using imgflip API</p>
                <img src='${data.data.url}'></img>
                `)
        });
        document.getElementById('baseimg').remove()
    })
});