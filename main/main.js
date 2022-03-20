fetch('https://api.imgflip.com/get_memes')
                .then(res => res.json())
                .then(json => {
                    $(document).ready(function(){
                        for(i = 0; i < json.data.memes.length; i++){
                            $('#memes_list').append
                            (
                            `<li id='meme${i}'" >
                            ${json.data.memes[i].name}
                            <img src='${json.data.memes[i].url}' id='meme_img${i}' style='display: none' ></img>
                            <button id='this_btn${i}'>
                                <a href='../create/create.html'>This one</a>
                            </button>
                            </li>`
                            )

                            let number = i;
                            let isClicked = false;


                            $(`#meme${number}`).css('width','fit-content');
                            $(`#meme_img${number}`).css('width','500px');
                            $(`#meme_img${number}`).css('background-color','#EAEAEA');
                            

                            document.getElementById(`meme${i}`).addEventListener('click', () => {
                                if(!isClicked){
                                $(`#meme_img${number}`).css('display','block');
                                isClicked = true;
                                }
                                else if(isClicked){
                                    $(`#meme_img${number}`).css('display','none');
                                isClicked = false;
                                }
                            })

                            document.getElementById(`this_btn${i}`).addEventListener('click', () => {
                                sessionStorage.setItem("templateURL", json.data.memes[number].url);
                                sessionStorage.setItem('templateID', json.data.memes[number].id);
                            });

                        }
                        

                        

                        const search_btn = document.getElementById('submit_search');

                        search_btn.addEventListener('click', () => {

                            const img = fetch('https://api.imgflip.com/get_memes')
                            .then(res => res.json())
                            .then(json => {

                                let names = [];
                                let urls = [];
                                let templateID = [];

                                let search_content = document.getElementById('search_input').value;

                                for(j = 0; j < json.data.memes.length; j++){

                                    if(json.data.memes[j].name.toLowerCase().split('').join('').includes(search_content)){
                                        names.push(json.data.memes[j].name);
                                        urls.push(json.data.memes[j].url);
                                        templateID.push(json.data.memes[j].id);
                                    }

                                    else if(json.data.memes[j].name.toLowerCase().split('').join('').replace(/ /g, '').includes(search_content)){
                                        names.push(json.data.memes[j].name);
                                        urls.push(json.data.memes[j].url);
                                        templateID.push(json.data.memes[j].id);
                                    }
                                    
                                }
                                return [names, urls, templateID];
                            });

                            
                            $(`#memes_list`).empty();

                            img.then( (array) => {
                                let names = array[0];
                                let urls = array[1];
                                let templateID = array[2];

                            for(y = 0; y < names.length; y++){

                                let number = y;

                                $(`#memes_list`).append(
                                `<li id='searched_meme${number}' >
                                   ${names[number]}
                                   <img src='${urls[number]}' id='searched_meme_img${number}' style='display: none' ></img>
                                   <button id='search_this_btn${y}'>
                                        <a href='../create/create.html'>This one</a>
                                    </button>
                                </li>`);
                                    
                                let isClicked = false;

                            
                                $(`#searched_meme${number}`).css('width','fit-content');
                                $(`#searched_meme_img${number}`).css('width','500px');
                                $(`#searched_meme_img${number}`).css('background-color','#EAEAEA');


                            document.getElementById(`search_this_btn${y}`).addEventListener('click', () => {
                                sessionStorage.setItem("templateURL", urls[number]);
                                sessionStorage.setItem('templateID', templateID[number]);
                            });

                            document.getElementById(`searched_meme${number}`).addEventListener('click', () => {
                                if(!isClicked){
                                $(`#searched_meme_img${number}`).css('display','block');
                                isClicked = true;
                                }
                                else if(isClicked){
                                $(`#searched_meme_img${number}`).css('display','none');
                                isClicked = false;
                                }
                            })

                               }
                            

                               

                            });

                            
                        });

                    
                        

                        

                    });
                })
                    
