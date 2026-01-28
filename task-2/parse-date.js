function parseDateString(dateString) {
    const trimmed = dateString.trim();

    const parts = trimmed.split(/\s+/);
    const format = parts[0];
    const datePart = parts[1];

    const [first, second, yearStr] = datePart.split("-");

    const year = Number(yearStr);

    if (format === "MDY") {
        const month = Number(first);
        const day = Number(second);
        return { day, month, year,};
    }

    const day = Number(first);
    const month = Number(second);
    return { day, month, year,};
}
console.log(parseDateString("MDY 10-21-1983"));
console.log(parseDateString("DMY 21-10-1983"));
console.log(parseDateString("MDY 03-15-2024"));
console.log(parseDateString("DMY 15-03-2024"));
