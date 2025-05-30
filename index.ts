import './style.css'

const colorPicker = document.getElementById('color') as HTMLInputElement;
const image = document.getElementById('image') as HTMLElement;

for(let i = 0;  i < image.children.length; i++) {
    const child = image.children[i] as SVGElement;

    child.onclick = () => {
        child.style.fill = colorPicker.value
    }
}