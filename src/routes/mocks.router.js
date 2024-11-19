import { Router } from 'express';
import { usersService, petsService } from '../services/index.js';
import { generateMockUsers } from '../utils/mockUsers.js';
import { generateMockPets } from '../utils/mockPets.js';

const router = Router();

router.get('/mockingusers', async (req, res) => {
    try {
      const { num } = req.query;
      const count = parseInt(num) || 50;
  
      const users = await generateMockUsers(count);
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Error al generar usuarios mock' });
    }
});

router.get('/mockingpets', async (req, res) => {
    try {
      const { num } = req.query; 
      const countPets = parseInt(num) || 25;
  
      if (countPets <= 0) {
        return res.status(400).json({ error: 'El número debe ser mayor que 0.' });
      }
  
      const pets = generateMockPets(countPets); 
      res.json(pets);
    } catch (error) {
      res.status(500).json({ error: 'Error al generar mascotas mock' });
    }
});

router.post('/generateData', async (req, res) => {
    const { users = 0, pets = 0 } = req.body;
  
    try {
      if (isNaN(users) || isNaN(pets)) {
        return res.status(400).json({ error: 'Los parámetros users y pets deben ser números' });
      }
  
      const mockUsers = await generateMockUsers(users);
      const mockPets = generateMockPets(pets);
  
      await Promise.all([
        ...mockUsers.map(user => usersService.create(user)),
        ...mockPets.map(pet => petsService.create(pet)),
      ]);
  
      res.status(201).json({ message: 'Datos generados correctamente' });
    } catch (error) {
      console.error('Error al generar datos:', error.message);
      res.status(500).json({ error: 'Error al generar datos' });
    }
});

export default router;
