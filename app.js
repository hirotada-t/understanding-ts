var userInput;
var userName;
userInput = 4;
userInput = "sss";
if (typeof userInput === "string")
    userName = userInput;
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
try {
    generateError("エラーが発生しました", 500);
}
catch (e) {
    console.log(e);
}
