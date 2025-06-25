const request = require("supertest");
const app = require("../app");

describe('User API', () => {
    test('GET / should return API status and response text', async () => {
        const res = await request(app).get('/');

        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('API is running');
    });

    test('GET /api/users should return list of users', async () => {
        const res = await request(app).get('/api/users');

        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });

    test('GET /API/users/1 should return user details', async () => {
        const res = await request(app).get('/api/users/1');

        expect(res.statusCode).toBe(200);
        expect(res.body.name).toBe('Alice');
    });

    test('GET /API/users/999 should return error', async () => {
        const res = await request(app).get('/api/users/999');

        expect(res.statusCode).toBe(404);
        expect(res.body.message).toBe('User not found');
    });

    test('POST /API/users should create new user', async () => {
        const createUser = {name: "Bonifacijus"}; 
        const res = await request(app).post('/api/users').send(createUser);

        expect(res.statusCode).toBe(201);
        expect(res.body.id).toBeGreaterThan(0);
        expect(res.body.name).toBe(createUser.name);
    });
});
