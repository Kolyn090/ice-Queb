import request from 'supertest';
import app from '../../api/app.js';
import server from '../../api/server.js';
import { MongoDB } from '../../api/configs/database.config.js';
import { ErrorMessages } from '../../api/configs/errorsMessage.config.js';

describe('authentication service routes for sign up', () => {
    beforeAll(async () => {
        // Setup code before any tests run for mongoDB
        await MongoDB.runServer();
    });

    afterAll(async () => {
        // close MongoDB connection and server after all tests run
        await MongoDB.closeConnection();
        server.close();
    });

    describe('sign up for a user', () => {
        it('correct signup', async () => {
            const payload = { email: 'gg1@example.com', password: 'password123', isTeacher: false };
            const response = await request(app).post('/api/auth/signup').send(payload);

            expect(response.statusCode).toBe(201);

            // check body field is not undefined
            expect(response.body.email).toBeDefined();
            expect(response.body.token).toBeDefined();

            expect(response.body.email).toBe(payload.email);
        });

        it('duplicate signup', async () => {
            const payload = { email: 'gg1@example.com', password: 'password123', isTeacher: false };
            const response = await request(app).post('/api/auth/signup').send(payload);

            expect(response.statusCode).toBe(403);

            expect(response.body).toStrictEqual({
                message: ErrorMessages.USER_ALREADY_EXISTS(payload.email),
                status: 'failure',
            });
        });

        it('missing email signup', async () => {
            const payload = { password: 'password123' };
            const response = await request(app).post('/api/auth/signup').send(payload);

            const expectedError = {
                message: ['Email does not exist', 'Missing isTeacher'],
                status: 'failure',
            };

            expect(response.statusCode).toBe(400);
            expect(response.body).toStrictEqual(expectedError);
        });

        it('missing password signup', async () => {
            const payload = { email: 'gg1@example.com' };
            const response = await request(app).post('/api/auth/signup').send(payload);

            const expectedError = {
                message: ['Password does not exist', 'Missing isTeacher'],
                status: 'failure',
            };

            expect(response.statusCode).toBe(400);
            expect(response.body).toStrictEqual(expectedError);
        });
        it('missing password', async () => {
            const payload = { email: 'gg1@example.com' };
            const response = await request(app).post('/api/auth/signup').send(payload);

            const expectedError = {
                message: ['Password does not exist', 'Missing isTeacher'],
                status: 'failure',
            };

            expect(response.statusCode).toBe(400);
            expect(response.body).toStrictEqual(expectedError);
        });
    });
});
