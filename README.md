# Hashbro

Micro parser for url hash


## Usage
```javascript
function onPage(link){
   console.log(link);
}

var hash = new Hashbro(onPage);

// http://domain.com/#/page1/page2/page3/
hash.goto('/page1/page2/page3/');

// http://domain.com/#/page1
hash.back(2);
```




