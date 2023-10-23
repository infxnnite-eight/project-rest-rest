const router = require('express').Router()

const places = require('../models/places.js')


router.get('/', (req, res) => {
    let places = [{
  name: 'H-Thai-ML',
  city: 'Seattle',
  state: 'WA',
  cuisines: 'Thai, Pan-Asian',
  pic: 'http://placekitten.com/250/250'
}, {
  name: 'Coding Cat Cafe',
  city: 'Phoenix',
  state: 'AZ',
  cuisines: 'Coffee, Bakery',
  pic: 'http://placekitten.com/250/250'
}]

      
    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
  router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  } else if (!places[id]) {
      res.render('error404')
  }
  else {
      places.splice(id, 1)
      res.redirect('/places')
  }
}) 

module.exports = router
