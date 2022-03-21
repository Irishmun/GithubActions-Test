const axios = require('axios')

async function getPages(user_token) {
    let pages = []
    await axios
        .get(`https://graph.facebook.com/me/accounts?access_token=${user_token}`)
        .then(res => {
            pages = res.data.data
        })
        .catch(error => {
            throw error
        })

    return pages
}

async function getReviews(page_id, page_token) {
    let reviews = []

    await axios
        .get(`https://graph.facebook.com/v13.0/${page_id}/ratings?access_token=${page_token}`)
        .then(res => {
            reviews = res.data.data
        })
        .catch(error => {
            throw error
        })

    return reviews
}

module.exports = {
    getPages,
    getReviews
}