fetch("https://crcapi.jcosioresume.com/CRCResource",{
    method: "POST",
    body: JSON.stringify({})
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
        displayCount(data)
    })
    .catch(err => {
        console.log('error ${err}')
    })

    function displayCount(data) {
        const count = data.ddbResponse.Attributes;
        const countDiv = document.getElementById("VisitorCount");
        const countName = count.VisitorCount;
        const heading = document.createElement("h1");
        heading.innerHTML = "You are visitor " + countName;
        countDiv.appendChild(heading);
    }