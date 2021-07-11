let tokens = ['43b0b529632b598eba7542794c8a4c0d','b7ef181bb0f3b3da54eb8b618c7ae544','bfe692d5d322ff7c2eaec64cac9b705a','ab6390b400dc18ff693a1b964ac3630a'];
function randomElement(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}
//func get data
async function getNews(query,token) {
    let stringApi = `https://gnews.io/api/v4/${query}&token=${token}`;
    console.log(stringApi)
    if (stringApi) {
        await fetch(stringApi)
            .then(response => response.json())
            .then(json => {
                let arrDataJson = json.articles;
                arrHtmls = arrDataJson.map(item => {
                    return  `<div class="col-6 col-md-4">
                                <div class="news-item">
                                    <a class="news-item-links" href="${item.url}">
                                        <div class="news-item-imgbox" style="background-image: url(${item.image});background-position: center center;background-size: cover;"></div>
                                        <div class="news-item-info">
                                            <h3 class="news-item-info">${item.title}</h3>
                                            <p class="news-item-info-descri">${item.description}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>`;
                })
                if(arrHtmls.length == 0){
                    document.querySelector('#list-news-item').innerHTML = 'Khong co tin tuc nao de hien thi';
                }
                if(arrHtmls.length >= 6){
                    strHtmls = arrHtmls.slice(0,6).join('');
                    document.querySelector('#list-news-item').innerHTML = strHtmls;
                }else 
                {
                    document.querySelector('#list-news-item').innerHTML = arrHtmls.join('');
                }

            });
    }
}
//get all:
getNews('top-headlines?topic=',randomElement(tokens));

//get by category:
document.getElementById('news-sport').addEventListener('click',function(e){
    e.preventDefault();
    getNews('top-headlines?topic=sports',randomElement(tokens));
});
document.getElementById('news-technology').addEventListener('click',function(e){
    e.preventDefault();
    getNews('top-headlines?topic=technology',randomElement(tokens));
});
document.getElementById('news-business').addEventListener('click',function(e){
    e.preventDefault();
    getNews('top-headlines?topic=business',randomElement(tokens));
});
document.getElementById('news-all').addEventListener('click',function(e){
    e.preventDefault();
    getNews('top-headlines?topic=',randomElement(tokens));
});

//get by search:

document.getElementById('searchnews-btn').addEventListener('click',function(event){
    let strKey = document.getElementById('searchnews-txt');
    if(strKey.value !== ''){
        stringQuery = `search?q=${strKey}`
        getNews(stringQuery,randomElement(tokens));
    }
    else{
        alert("Please enter your keyword before click button search")
        strKey.focus();
    }
})


//loading event: