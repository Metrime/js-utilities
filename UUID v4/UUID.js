function UUID(a, b) {
    for (b = a = ""; a++ < 36; b += 52 & 51 * a ? (15 ^ a ? 8 ^ Math.random() * (20 ^ a ? 16 : 4) : 4).toString(16) : "-");
    return b
}