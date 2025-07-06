/*
import express from 'express';
const router = express.Router();

router.post('/send', (req, res) => {
  const data = req.body;
  console.log("Received in router:", data);
  res.status(200).json({
    success: true,
    message: "Reservation received",
    data
  });
});

export default router;
*/
import express from 'express';
import send_reservation from '../controller/reservation.js';

const router = express.Router();

router.post("/send", send_reservation);


export default router;


