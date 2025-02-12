function areaDoCirculo (raio){
    let area = Math.PI * (raio *raio);
    return area;
}

let raioDoCirculo = prompt("Digite o raio do circulo: ");
let area = areaDoCirculo(raioDoCirculo);

console.log(`A área do circulo é: ${area.toFixed(2)}`);