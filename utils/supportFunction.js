
module.exports = SupportFun = {
    modifiyArray: function (jsonArray){
        let modifiedArray = [];
        console.log(jsonArray)
        if(Array.isArray(jsonArray)){
            for(var i = 0; i < jsonArray.length; i++){
                modifiedArray.push(jsonArray[i].email)
            }
        }
        return modifiedArray;
    }
}
