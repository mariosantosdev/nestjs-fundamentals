import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { AppModule } from 'src/app.module'
import request from 'supertest'

describe('Create sesion (E2E)', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()

    await app.init()
  })

  test('[POST] /sessions', async () => {
    await request(app.getHttpServer()).post('/accounts').send({
      name: 'John Doe',
      email: 'johndoe@example.com.br',
      password: '123456',
    })

    const response = await request(app.getHttpServer()).post('/sessions').send({
      email: 'johndoe@example.com.br',
      password: '123456',
    })

    expect(response.statusCode).toBe(201)

    expect(response.body).toEqual({
      accessToken: expect.any(String),
    })
  })
})
