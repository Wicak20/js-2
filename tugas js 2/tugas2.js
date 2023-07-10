const searchName = (search, limit, callback) => {
    const name = [
        "Abigail", "Alexandra", "Alison",
        "Amanda", "Angela", "Bella",
        "Carol", "Caroline", "Carolyn",
        "Deirdre", "Diana", "Elizabeth",
        "Ella", "Faith", "Olivia", "Penelope"
    ]

    let output = []

    name.forEach(el => {
        if (el.toLowerCase().includes(search.toLowerCase())) {
            if (output.length < limit) {
                output.push(el)
            }
        }
    })

    return callback(output)
}

const print = (data) => {
    console.log(data)
}

searchName("an", 3, print)
