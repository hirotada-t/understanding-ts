let userInput: unknown;
let userName: string;

userInput = 4;
userInput = "sss";

if (typeof userInput === "string") userName = userInput;

function generateError(message: string, code: number):never { 
  throw { message: message, errorCode: code };
}

try {
  // エラーの条件によりエラー関数を起動
  // if (...) {
    generateError("エラーが発生しました", 500);
  // }

  // エラーが起きなかった場合の処理
  // ...
  // ...

  // エラー発生時の処理(エラーオブジェクトeを受け取り)
} catch(e) {
  console.log(e);
}