import { Router } from 'express';

const router = Router();

// Tweet Crud

// Create user
router.post('/', (req, res) => {
	res.status(501).json({ error: 'Not implemented' });
});

// list tweets

router.get('/', (req, res) => {
	res.status(501).json({ error: 'Not implemented' });
});

// get one tweet
router.get('/:id', (req, res) => {
	const { id } = req.params;
	res.status(501).json({ error: `Not implemented: ${id}` });
});

// update tweet

router.put('/:id', (req, res) => {
	const { id } = req.params;
	res.status(501).json({ error: `Not implemented: ${id}` });
});

//delete tweet

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	res.status(501).json({ error: `Not implemented: ${id}` });
});

export default router;
