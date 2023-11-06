let view = document.getElementById("view");
function result(){
    let result = eval(view.value);
    view.value = result;
}
function input(value){
    view.value += value ;
    console.log(value);
}
function deleteInput(){
    view.value = "";
}