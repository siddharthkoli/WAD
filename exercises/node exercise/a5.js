function printRev(msg) {
    return msg.split("").reverse().join("");
}

function print(msg, callback) {
    console.log(msg + " " + callback(msg));
}

print('Hello', printRev);