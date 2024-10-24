import type { AppRouteHandler } from '@/lib/types';
import type { CreateRoute, GetOneRoute, ListRoute } from '@/routes/users/users.routes';

export const list: AppRouteHandler<ListRoute> = async (c) => {
  // Add db query to get all users
  return c.json([{
    age: 42,
    id: '123',
    name: 'John Doe',
  }, {
    age: 32,
    id: '124',
    name: 'Sarah Jones',
  }], 200);
};

export const create: AppRouteHandler<CreateRoute> = async (c) => {
  const user = c.req.valid('json');
  console.log({ user });
  // Add db query create a user
  return c.json({
    age: 42,
    id: '2342',
    name: 'John Doe',
  }, 200);
};

export const getOne: AppRouteHandler<GetOneRoute> = async (c) => {
  const { id } = c.req.valid('param');
  console.log({ id });
  // Add db query to get a user by id
  const foundUser = {
    age: 50,
    id,
    name: 'Lisa Smith',
  };

  if (!foundUser) {
    return c.json(
      {
        message: 'Not found',
      },
      404,
    );
  }
  return c.json(foundUser, 200);
};
