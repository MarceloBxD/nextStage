const gameApiReq = async () => {
    const api = await fetch("https://api.mercadolibre.com/sites/MLB/search?q=celulares")
    const json = await api.json()
    return json
}