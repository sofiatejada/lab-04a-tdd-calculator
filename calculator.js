export function addition(x, y) {
    return x + y;
}

export function subtraction(x, y) {
    return x - y;
}

export function multiplication(x, y) {
    return x * y;
}

export function division(x, y) {
    if (x === 0 && y === 0) {
        return 0;
    } else {
        return x / y;
    }
}

export function toNumber(input) {
    return Number(input.value);
}