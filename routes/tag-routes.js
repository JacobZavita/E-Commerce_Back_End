const router = require('express').Router()
const { Tag, Product, ProductTag } = require('../../models')

// The `/api/tags` endpoint

router.get('/tags', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [{
      model: Product,
      through: ProductTag
    }]
  })
  .then(results => {
    res.json(results)
  })
})

router.get('/tags/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findAll({
    where: {
      id: req.params.id
    },
    include: [{
      model: Product,
      through: ProductTag
    }]
  })
    .then(results => {
      res.json(results)
    })
})

router.post('/tags', (req, res) => {
  // create a new tag
  Tag.create({
    id: req.body.id,
    tag_name: req.body.tag_name
  })
  .then(results => {
    res.json(results)
  })
})

router.put('/tags/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    id: req.body.id,
    tag_name:req.body.tag_name
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then(results => {
    res.json(results)
  })
})

router.delete('/tags/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(results => {
    res.json(results)
  })
})

module.exports = router
