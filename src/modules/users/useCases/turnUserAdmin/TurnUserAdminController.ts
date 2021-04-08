import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  public handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;

      const user = this.turnUserAdminUseCase.execute({ user_id });

      return response.status(202).json(user);
    } catch (e) {
      return response.status(404).json({ error: "Not Found" });
    }
  }
}

export { TurnUserAdminController };
