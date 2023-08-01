console.log("This is my index js file");

// https://newsapi.org/register
// Email:  khan7oct@gmail.com
// Pass: news@api
// API Key: a8887e9907604d9297624a29b055176a


// Initialize the news api parameters
//let source = 'the-times-of-india';
//let apiKey = 'd093053d72bc40248998159804e0e67d'
//URL https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=API_KEY

let source = 'bbc-news';
let apiKey = 'a8887e9907604d9297624a29b055176a'


// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function() {
    if (xhr.status === 200) {
        let json = JSON.parse(xhr.responseText);
        let allArticles = json.articles;
        // console.log(json);
        // console.log(allArticles);
        let newsHtml = "";
        allArticles.forEach(function(element, index) {
            console.log(element, index)
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    } else {
        console.log("Some error occured")
    }
}

xhr.send()