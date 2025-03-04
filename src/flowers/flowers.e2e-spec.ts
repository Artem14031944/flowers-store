import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '..//app.module';
import * as request from 'supertest';

describe('FlowersController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleMixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleMixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    app.init();
  });

  it('/flowers (GET)', () => {
    return request(app.getHttpServer())
      .get('/flowers')
      .expect(200)
      .expect([
        {
          id: 1,
          name: 'rose',
          color: 'red',
          price: 10,
          createdAt: '2025-03-02T14:50:25.051Z',
          updatedAt: '2025-03-02T14:50:25.051Z',
        },
        {
          id: 2,
          name: 'tulip',
          color: 'yellow',
          price: 25,
          createdAt: '2025-03-02T14:50:25.051Z',
          updatedAt: '2025-03-02T14:50:25.051Z',
        },
        {
          id: 3,
          name: 'lily',
          color: 'white',
          price: 20,
          createdAt: '2025-03-02T14:50:25.051Z',
          updatedAt: '2025-03-02T14:50:25.051Z',
        },
        {
          id: 4,
          name: 'romashka',
          color: 'green',
          price: 10,
          createdAt: '2025-03-02T14:50:25.051Z',
          updatedAt: '2025-03-02T14:50:25.051Z',
        },
      ]);
  });

  it('/flowers (POST)', () => {
    return request(app.getHttpServer())
      .post('/flowers')
      .send({
        name: 'Sunflower',
        color: 'red',
        price: 8,
      })
      .expect(201)
      .expect({
        id: 5,
        name: 'Sunflower',
        color: 'red',
        price: 8,
        createdAt: '2025-03-02T14:50:25.051Z',
        updatedAt: '2025-03-02T14:50:25.051Z',
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
