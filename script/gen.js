function choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function generate() {
    let url = "/data/dict.json";
    let request = new XMLHttpRequest();
    let result = 'error';
    request.open("get", url);
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            let json = JSON.parse(request.responseText);
            let subject = choice(json['subject']);
            let predicate = choice(json['predicate']);
            let object = choice(json['object']);
            let attribute = choice(json['attribute']);
            let adverbial_1 = choice(json['adverbial-1']);
            let adverbial_2 = choice(json['adverbial-2']);
            result = `
                    <div class='adverbial'>${adverbial_1}</div>
                    ，
                    <div class='subject'>${subject}</div>
                    <div class='adverbial'>${adverbial_2}</div>
                    <div class='predicate'>${predicate}</div>
                    <div class='attribute'>${attribute}</div>
                    <div class='object'>${object}</div>
                    。
                    `;
        }
    }
    return result;
}