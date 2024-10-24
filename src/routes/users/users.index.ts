import { createRouter } from '@/lib/createApp';

import * as handlers from './users.handlers';
import * as routes from './users.routes';

const router = createRouter()
  .openapi(routes.list, handlers.list)
  .openapi(routes.create, handlers.create)
  .openapi(routes.getOne, handlers.getOne);

export default router;
