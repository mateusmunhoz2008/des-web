document.addEventListener('DOMContentLoaded', () => {
    const flexbox = document.getElementById('flexbox');
    const boxes = document.querySelectorAll('.box');
    const colorPicker = document.getElementById('color');
    const shapeSelect = document.getElementById('shape');
    const sizeInput = document.getElementById('size');
    const directionSelect = document.getElementById('direction');
    const justifySelect = document.getElementById('justify');
    const alignSelect = document.getElementById('align');

    function updateStyles() {
        boxes.forEach(box => {
            box.style.backgroundColor = colorPicker.value;
        });

        boxes.forEach(box => {
            if (shapeSelect.value === 'circle') {
                box.style.borderRadius = '50%';
                box.style.width = `${sizeInput.value}px`;
            } else {
                box.style.borderRadius = '0';
                box.style.width = `${sizeInput.value}px`;
            }
            box.style.height = `${sizeInput.value}px`;
        });

        flexbox.style.flexDirection = directionSelect.value;
        flexbox.style.justifyContent = justifySelect.value;
        flexbox.style.alignItems = alignSelect.value;
    }

    colorPicker.addEventListener('input', updateStyles);
    shapeSelect.addEventListener('change', updateStyles);
    sizeInput.addEventListener('input', updateStyles);
    directionSelect.addEventListener('change', updateStyles);
    justifySelect.addEventListener('change', updateStyles);
    alignSelect.addEventListener('change', updateStyles);

    updateStyles();
});