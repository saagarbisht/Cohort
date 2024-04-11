const root = document.getElementById("root");

class CustomeReact {
    constructor(elementData){
        this.element = elementData.element;
        this.data = elementData.data;
        this.attributes = elementData.attributes;
    }
    createElement(){
        const element = document.createElement(this.element);
        element.innerText = this.data;
        this.attributes.forEach(attr => element.setAttribute(attr.key,attr.value));
        root.appendChild(element)
    }
}

const elementData = {
    element : "a",
    data : "click me to visit google",
    attributes : [
        {
            key : "href",
            value : "https://google.com"
        },{
            key : "id",
            value : "googleLink"
        }
    ]
}

const anchorTag = new CustomeReact(elementData)
anchorTag.createElement()