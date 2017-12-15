function f (terms) {
    if (terms <= 1) return terms
    return f(terms-1) + f(terms-2)
}

console.log(f(process.argv[2]))
