import { Test } from '@nestjs/testing';
import { FlowersController } from './flowers.controller';
import { FlowersService } from './flowers.service';

describe('FlowersController', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let controller: FlowersController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [FlowersController],
      providers: [
        {
          provide: FlowersService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([
              {
                id: 1,
                name: 'rose',
                color: 'red',
                price: 10,
              },
            ]),
            create: jest.fn().mockResolvedValue({
              id: 2,
              name: 'tulip',
              color: 'green',
              price: 15,
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<FlowersController>(FlowersController);
  });

  it('should return an array of flowers', async () => {
    expect(await controller.findAll()).toEqual([
      {
        id: 1,
        name: 'rose',
        color: 'red',
        price: 10,
      },
    ]);
  });

  it('should return a new flower', async () => {
    expect(
      await controller.create({
        name: 'tulip',
        color: 'green',
        price: 15,
      }),
    ).toEqual([
      {
        id: 2,
        name: 'tulip',
        color: 'green',
        price: 15,
      },
    ]);
  });
});
