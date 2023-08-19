
export const getUser = async (userId) => {
    const url = `https://64dd6d75825d19d9bfb12825.mockapi.io/api/v1/users/${userId}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);

    return data.budget
}