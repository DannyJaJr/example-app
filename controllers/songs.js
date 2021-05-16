////part1
const express = require('express');
const router = express.Router();
const db = require('../models');


/////part 4
///now redirect the reslt to any requiest to a new page
router.get('/', async (req, res) => {
    //grab all the song from teh databse to display them
    const fetchSongs = await db.song.findAll();

    res.render('songs/index', { songs: fetchSongs });
})






////part2
///route for the new model created
router.get('/new', (req, res) => {
    res.render('songs/new')
})


//////part 3
// app.post('/songs', (req, res) => {
//   const {title, album} = req.body;
//   console.log(title, album);
// }) //or the async await verson below
router.post('/', async (req, res) => {
    const { title, album } = req.body;
    console.log(title, album)

    const newSong = await db.song.create({ title, album })
    console.log(newSong)
    res.redirect('/songs')
})



//////part 1
module.exports = router;