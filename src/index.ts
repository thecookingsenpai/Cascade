import Cascade from "./cascade"

async function go() {
    const hasher = new Cascade(37, 20, 5, "optional_seed")
    const result = hasher.hash("Hello, world!", "opional_salt")
    console.log("Salt:", result.salt)
    console.log("Hash:", result.hash)
}

go()
