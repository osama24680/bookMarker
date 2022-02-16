var siteNameInput = document.getElementById("siteNameInput")
var siteURLInput = document.getElementById("siteURLInput")
var tableRow = document.getElementById("tableRow")

var allSites;
if (localStorage.getItem("websites") != null) {
    allSites = JSON.parse(localStorage.getItem("websites"))
} else {
    allSites = [];
}
displaySite()

function addSite() {
    if (siteNameInput.value != "" || siteURLInput.value != "") {
        var site = {
            siteName: siteNameInput.value,
            siteURL: siteURLInput.value
        }
        allSites.push(site)
        localStorage.setItem("websites", JSON.stringify(allSites))
        displaySite()
        clearForm()
    } else {
        alert("please, enter the name and URL")
    }
}

function displaySite() {
    var temp = "";
    for (var i = 0; i < allSites.length; i++) {
        temp +=
            ` <tr>
                    <td><h4>${allSites[i].siteName}</h4></td>
                    <td><a class="btn btn-primary" id="visitBtn" target="_blank" href="${allSites[i].siteURL}">visit</a></td>
                    <td><button class="btn btn-danger " onclick="deleteSite(${i})">Delete</button></td>
                </tr>`
    }
    tableRow.innerHTML = temp;
}

function clearForm() {
    siteNameInput.value = "";
    siteURLInput.value = "";
}

function deleteSite(index) {
    allSites.splice(index, 1)
    localStorage.setItem("websites", JSON.stringify(allSites))
    displaySite()
}

function searchSite(term) {
    var temp = "";
    for (var i = 0; i < allSites.length; i++) {
        if (allSites[i].siteName.toLowerCase().includes(term.toLowerCase())) {
            temp +=
                ` <tr>
                <td><h4>${allSites[i].siteName}</h4></td>
                <td><a class="btn btn-primary" id="visitBtn" target="_blank" href="${allSites[i].siteURL}">visit</a></td>
                <td><button class="btn btn-danger " onclick="deleteSite(${i})">Delete</button></td>
            </tr>`
        }
        tableRow.innerHTML = temp;
    }

}











































// `
//             <h4>${allSites[i].siteName}</h4>
//             <div class="d-flex justify-content-between align-items-center" >
//                 <button class="btn btn-primary " id="visitBtn">${allSites[i].siteURL}</button>
//                 <button class="btn btn-danger ">Delete</button>
//             </div>`