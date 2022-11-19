class IO {
    constructor(scope) {
        this.scope = scope
    }

    read(id) {
        let key = `${this.scope}/${id}`
        return localStorage.getItem(key)
    }

    write(id, data) {
        let key = `${this.scope}/${id}`
        localStorage.setItem(key, data)
    }

    remove(id) {
        let key = `${this.scope}/${id}`
        localStorage.removeItem(key)
    }

    listKeys() {
        let keys = []
        for (const key in localStorage) {
            if (Object.hasOwnProperty.call(localStorage, key) &&
                key.startsWith(this.scope)) {
                    let i = key.indexOf('/') + 1
                keys.push(key.slice(i))
            }
        }
        return keys
    }
}

export { IO }
