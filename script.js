window.onload = function() {
    const input = document.querySelector('.search-box input[type="text"]');
    const counter = document.createElement('div');
    counter.className = 'counter';
    input.parentNode.appendChild(counter);

    input.addEventListener('input', function() {
        const inputWidth = input.offsetWidth;
        counter.style.fontSize = inputWidth / 15 + 'px'; // Ajuste conforme necessário
    });

    // Chamada inicial para configurar o tamanho da fonte inicial
    input.dispatchEvent(new Event('input'));
};
