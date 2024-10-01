// In Node.js, every file is a module

function addition(a1, a2) {
    return a1 + a2;
}

function subtract(s1, s2) {
    return s1 -s2;
}

// Modules ko export krne ka liye yeh likha hai
// agar hamari file main 50 function hai aur haame sabko export karna hai toh yeh statement 50 baar hi likhni padegi
// module.exports.add = addition;
// module.exports.sub = subtract;

//Shortcut: taaki 50 times na likhna pade
module.exports = {addition, subtract};

