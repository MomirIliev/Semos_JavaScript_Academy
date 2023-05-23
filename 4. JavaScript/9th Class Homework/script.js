
let url = "https://jsonplaceholder.typicode.com/photos";

function DisplayImages(url) {
    fetch(url)
        .then(res => res.json())
        .then(res => {
            let firstHundredElements = res.slice(0, 100);
            for (let i = 0; i < firstHundredElements.length; i++) {
                // console.log(firstHundredElements[i]);
                const imgTag = document.createElement('img');
                imgTag.src = firstHundredElements[i].thumbnailUrl;
                imgTag.addEventListener('click', () => {
                    if(imgTag.src = firstHundredElements[i].url)
                    imgTag.src = firstHundredElements[i].url; 
                    // else if(imgTag.src = firstHundredElements[i].thumbnailUrl)
                    else
                    imgTag.src = firstHundredElements[i].thumbnailUrl;
                })
                document.body.appendChild(imgTag);
            }
        })
        .catch(err)
            console.log(err); 
}

DisplayImages(url);
