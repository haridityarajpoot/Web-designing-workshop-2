

let n = 4;

// 1. Simple Pyramid
console.log("Simple Pyramid");
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
console.log("");

// 2. Flipped Simple Pyramid
console.log("Flipped Simple Pyramid");
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += "  ";
    }
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
console.log("");

// 3. Inverted Pyramid
console.log("Inverted Pyramid");
for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
console.log("");

// 4. Flipped Inverted Pyramid
console.log("Flipped Inverted Pyramid");
for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += "  ";
    }
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
console.log("");

// 5. Triangle
console.log("Triangle");
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
console.log("");

// 6. Inverted Triangle
console.log("Inverted Triangle");
for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
console.log("");

// 7. Half Diamond Pattern
console.log("Half Diamond Pattern");
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
for (let i = n - 1; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
console.log("");

// 8. Flipped Half Diamond Pattern
console.log("Flipped Half Diamond Pattern");
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += "  ";
    }
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
for (let i = n - 1; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += "  ";
    }
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
console.log("");

// 9. Diamond Pattern
console.log("Diamond Pattern");
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
for (let i = n - 1; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
console.log("");

// 10. Hourglass Pattern
console.log("Hourglass Pattern");
for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
for (let i = 2; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}

