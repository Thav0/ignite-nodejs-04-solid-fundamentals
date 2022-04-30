import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const userUpdated = this.turnUserAdminUseCase.execute({ user_id });

      return response.json(userUpdated);
    } catch (error) {
      return response.status(404).json({ error: "User not found" });
    }
  }
}

export { TurnUserAdminController };
