

// state={data:store}
import store from '../../store'

function search() {
    let pathparts = window.location.pathname.split('/');
    let pageName = pathparts[pathparts.length - 1].replace("%20", " ")
    console.log(pageName)
    let data = store

    if (pageName != "category" && pageName != "home" && pageName != "") {
        data = store.filter((elm) => elm.category == pageName);
    }
        
    let searchInput = document.getElementById("searchInput")
    let text = searchInput.value;

    let searchResult = []
    if (!((pageName == "home" || pageName == "") && (text == "" ||text == " " ))) {
        searchResult = data.filter((elm) => (elm.title.toLowerCase().includes(text.toLowerCase()) || elm.category.toLowerCase().includes(text.toLowerCase())));
    }
    
    // console.log(searchResult)
    return searchResult
}
    

export default search