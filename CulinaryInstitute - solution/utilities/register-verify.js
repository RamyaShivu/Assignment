$(document).ready(function () {
    idArr = ["name","nameError","age","ageError","city","cityError","btn","successMessage","type","list"];
    idsAbsent = []
    for (let i = 0; i < idArr.length; i++) {
        if ($("#" + idArr[i]).length != 1) {
            idsAbsent.push(idArr[i]);
        }
    }

    if (idsAbsent.length > 0) {
        console.error("These id's are either missing or repeating in your code: " + idsAbsent);
    }
    else {
        console.log("All Id's are present. You are safe");
    }
})