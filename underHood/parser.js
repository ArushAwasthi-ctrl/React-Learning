const Component  = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click it or suck it'
}
const insertInto = document.querySelector('#root');
function render(Component , insertInto)
{
    const Item = document.createElement(Component.type);
   Object.entries(Component.props).forEach(([key, value]) => {
    Item.setAttribute(key, value);
});

    Item.innerHTML = Component.children;

    insertInto.appendChild(Item);
}
render(Component , insertInto);