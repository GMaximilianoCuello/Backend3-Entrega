import request from 'supertest'
import { expect } from 'chai'
import app from '../app.js'

describe('Adoption Router - Mock Data', function () {
    this.timeout(10000)
  it('Debe generar una lista de 50 usuarios', async () => {
    const res = await request(app).get('/api/mocks/mockingusers');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body).to.have.lengthOf(50);
  });

  it('Debe generar una lista de usuarios mock con un número específico', async () => {
    const num = 30;
    const res = await request(app).get(`/api/mocks/mockingusers?num=${num}`);
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body).to.have.lengthOf(num);
  });

  it('Debe generar una lista de 25 mascotas', async () => {
    const res = await request(app).get('/api/mocks/mockingpets');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body).to.have.lengthOf(25);
  });

  it('Debe generar una lista de mascotas mock con un número específico', async () => {
    const num = 15;
    const res = await request(app).get(`/api/mocks/mockingpets?num=${num}`);
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body).to.have.lengthOf(num);
  });

  it('Debe generar usuarios y mascotas mock', async () => {

    const initialUsers = await request(app).get('/api/users');
    const usersCount = initialUsers.body.payload.length;

    const initialPets = await request(app).get('/api/pets');
    const petsCount = initialPets.body.payload.length;

    const usersToCreate = 10;
    const petsToCreate = 20;

    const result = await request(app)
        .post('/api/mocks/generateData')
        .send({ 
          users: usersToCreate, 
          pets: petsToCreate 
        })
        .set('Content-Type', 'application/json');

    expect(result.status).to.equal(201);
    expect(result.body).to.have.property('message', 'Datos generados correctamente');

    const finalUsers = await request(app).get('/api/users');
    const finalUsersCount = finalUsers.body.payload.length;

    const finalPets = await request(app).get('/api/pets');
    const finalPetsCount = finalPets.body.payload.length;

    expect(finalUsersCount - usersCount).to.equal(usersToCreate);
    expect(finalPetsCount - petsCount).to.equal(petsToCreate);
  });
 
});
