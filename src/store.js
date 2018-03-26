/*
* @Author: anchen
* @Date:   2017-02-28 17:03:58
* @Last Modified by:   anchen
* @Last Modified time: 2017-03-01 16:28:43
*/

const storage_key = "todos-vuejs"
export default{
    fetch(){
        return JSON.parse(window.localStorage.getItem(storage_key) ||'[]')
    },
    save(items){
        window.localStorage.setItem(storage_key,JSON.stringify(items))
    }
}