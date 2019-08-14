const mongoose = require('mongoose');
const router = require('express').Router();

// Make model for 'mood':
const Mood = mongoose.model('mood', mongoose.Schema({
  val: { type: String, required: true },
  weather_id: { type: String, required: true },
}));

router.post('/api/moods', (req, res) => {
  console.log(req.body);
  const newMood = new Mood(req.body);
  newMood.save()
    .then(() => res.status(200).end())
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
