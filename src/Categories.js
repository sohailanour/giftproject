
import store from './store'

let FindCat = ["All"]

for (let i = 0; i <= store.length - 1; i++){
    if (FindCat.indexOf(store[i].category) == -1) {
        FindCat.push(store[i].category)
    }
}

FindCat.push("fashion")

const Categories = FindCat;

export default Categories