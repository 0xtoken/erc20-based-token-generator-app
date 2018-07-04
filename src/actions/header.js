export const faq = (num) => {
    return {
        type: 'FAQ',
        payload: { num }
    }
}

export const about = (num) => {
    return {
        type: 'ABOUT',
        payload: { num }
    }
}