
export function getProducts() {
    let url = 'https://script.google.com/macros/s/AKfycbyUxf43FMa-RzU_CynnV9AltB9VMuifTR9HSgJQmpeR7u7PSyYRMQCMQaz2ySo-9AZE/exec';
    return fetch(url).then(res => res.json());
}