const express = require('express')
const facebook = require('../services/facebookReviewService')

const router = express.Router()

router.get('/pages', async(req, res) => {
    try {
        let pages = await facebook.getPages(req.query.access_token)
        res.send(pages)
    } catch (error) {
        res.status(error.response.status)
            .send(error.response.data.error)
    }
})

router.get('/reviews', async(req, res) => {
    try {
        let reviews = await facebook.getReviews(req.query.page_id, req.query.access_token)
        res.send(reviews)
    } catch (error) {
        res.status(error.response.status)
            .send(error.response.data.error)
    }
})

module.exports = router