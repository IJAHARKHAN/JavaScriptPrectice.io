let str = 'python';
let links = document.links;
console.log(links);
let getHref;
let makeArrayLinks = Array.from(links);
 console.log('getAray',makeArrayLinks);
Array.from(links).forEach(function(element) {
    console.log(element);
    getHref = element.href;
    if (getHref.includes(str)) {
        console.log(getHref);
    }
});