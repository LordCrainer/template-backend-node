import { Router } from "express";
const api = Router();

const apiRouter = () => {
    // api.use("/transcoding", transcodingRouter(api));
    // api.use("/upload", uploadRouter(api));
    return api;
  };
  
  export default apiRouter;
