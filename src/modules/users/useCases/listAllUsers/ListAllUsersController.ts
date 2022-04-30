import { Request, Response } from "express";
import { IncomingHttpHeaders } from "http";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface IRequestUser extends Request {
  user_id: string;
}

interface IReqCustom<THeader> extends Request {
  headers: IncomingHttpHeaders & THeader;
}

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: IReqCustom<IRequestUser>, response: Response): Response {
    const { user_id } = request.headers;

    try {
      const users = this.listAllUsersUseCase.execute({ user_id });
      return response.json(users);
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}

export { ListAllUsersController };
