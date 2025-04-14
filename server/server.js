import express from 'express';
import playgroundEquipmentRoutes from './routes/playgroundEquipmentRoutes.js';
import showRequests from './showRequests.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(showRequests)
app.use(express.json());

app.use('/api/playgroundEquipment', playgroundEquipmentRoutes);

const server = app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
})