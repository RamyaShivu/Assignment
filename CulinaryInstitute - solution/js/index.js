function store(){
    var interest = document.getElementById('interest').value
    sessionStorage.setItem('interest',interest)
    document.getElementById('indexButton').disabled = false
    console.log("ss",sessionStorage.getItem('interest'))
}