const key = 'postData';

export const getPost = () => JSON.parse(localStorage.getItem())

export const setPost = (data) => localStorage.setItem(key,JSON.stringify(data))

export const checkPost = (list,currentProductId) => list.some((item) => item.id === currentProductId)