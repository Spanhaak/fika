const express = require('express');
const router = express.Router();

// @route   GET api/fika
// @desc    Get all fika applications
// @access  Private
router.get('/', (req, res) => {
    res.send('Get all fikas');
});

// @route   POST api/fika
// @desc    Post a new FIKA
// @access  Private
router.post('/', (req, res) => {
    res.send('Post a new FIKA');
});

// @route   PUT api/fika/:id
// @desc    Update an existing FIKA
// @access  Private
router.put('/:id', (req, res) => {
    res.send('Update a FIKA');
});

// @route   DELETE api/fika
// @desc    Deleta a FIKA
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Delete a FIKA');
});


module.exports = router;