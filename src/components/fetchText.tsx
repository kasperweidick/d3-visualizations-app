const fetchText = async (url:string): Promise<any> => {
    const response = await fetch(url)
    return await response.text()
}

export default fetchText