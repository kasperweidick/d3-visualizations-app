const fetchText = async (url:string): Promise<any> => {
    const response = await fetch(url)
    const text = await response.text()
    return text
}

export default fetchText