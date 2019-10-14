
module.exports = SupportFun = {
    modifiyArray: function (jsonArray){
        let modifiedArray = [];
        if(Array.isArray(jsonArray)){
            for(var i = 0; i < jsonArray.length; i++){
                modifiedArray.push(jsonArray[i].email)
            }
        }
        return modifiedArray;
    }
}
