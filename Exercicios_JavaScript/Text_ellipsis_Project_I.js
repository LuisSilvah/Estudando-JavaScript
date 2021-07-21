/**
 * @param {string} text
 */
 export function getDescription(text) {
    return text.substring(0,10);
     // write something in the BROWSER and see it in the console

}

console.log(getDescription('index.html'));
console.log(getDescription('index.css'));
console.log(getDescription('index.js'));