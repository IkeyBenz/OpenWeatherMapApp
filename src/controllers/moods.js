const mongoose = require('mongoose');
const router = require('express').Router();

// Make model for 'mood':
const Mood = mongoose.model('mood', mongoose.Schema({
  val: { type: String, required: true },
  weather_id: { type: String, required: true },
}));

router.post('/api/moods', async (req, res) => {
  try {
    const newMood = new Mood(req.body);
    const previous = await Mood.find({ weather_id: newMood.weather_id });
    await newMood.save();
    return res.status(200).send(previous);
  } catch (e) {
    return res.status(400).send(e);
  }
});

module.exports = router;
