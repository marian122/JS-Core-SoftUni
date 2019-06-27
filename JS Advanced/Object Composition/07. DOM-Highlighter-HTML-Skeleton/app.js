function solve(selector){
    let elem = document.querySelector(selector);
    elem.classList.add('highlight');
    highlightChildren(elem);

    function highlightChildren(element) {
        let children = element.children;

        for (let i = 0; i < children.length; i++) {
            highlightChildren(children[i]);
            children[i].classList.add('highlight');
            
        }
    }
}

solve('#content');