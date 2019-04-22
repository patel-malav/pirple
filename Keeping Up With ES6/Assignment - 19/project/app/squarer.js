let square = (num) => num * num;

document.getElementById('input').addEventListener('change', () => {
    document.getElementById('output').value = square(document.getElementById('input').value);
})
