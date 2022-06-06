import express from 'express';
import commentRouter from './comment.routes.js';
import userRouter from './user.routes.js';
import authRouter from './auth.routes.js';
import bookmarkRouter from './bookmark.routes.js';
import rateRouter from './rate.routes.js';
import postRouter from './post.routes.js';

const apiRouter = express();

apiRouter.use('/', authRouter);
apiRouter.use('/', userRouter);
apiRouter.use('/', commentRouter);
apiRouter.use('/', rateRouter);
apiRouter.use('/', postRouter);
apiRouter.use('/', bookmarkRouter);

export default apiRouter;