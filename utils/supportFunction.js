
module.exports = SupportFun = {
    modifiyArray: function (jsonArray){
        let modifiedArray = [];
        if(Array.isArray(jsonArray.recipients)){
            for(var i = 0; i < jsonArray.recipients.length; i++){
                modifiedArray.push(jsonArray.recipients[i].email)
            }
        }
        return modifiedArray;
    }
}
