import { Request, Response } from 'express'
import CreateAdmService from 'src/services/admServices/createAdmService'
import DeleteAdmService from 'src/services/admServices/deleteAdmServer'
import ListAllAdmService from 'src/services/admServices/listAllAdmService'
import ListOneAdmService from 'src/services/admServices/listOneAdmService'
import UpdateAdmService from 'src/services/admServices/UpdateAdmService'

class AdmController {
  public async createAdm(req: Request, res: Response): Promise<Response> {
    const { name, birthDate, sexualOrientation, email, lastEmail, fone, avatar, password } = req.body
    const addNewAdm = new CreateAdmService()
    const thisAdm = await addNewAdm.execute({
      name,
      birthDate,
      sexualOrientation,
      email,
      lastEmail,
      fone,
      avatar,
      password,
    })
    return res.json(thisAdm)
  }

  public async listOneAdm(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const showAdm = new ListOneAdmService()
    const thisAdm = await showAdm.execute({ id })
    return res.json(thisAdm)
  }

  async listAllAdm(req: Request, res: Response) {
    const listAdm = new ListAllAdmService()
    const showAdm = await listAdm.execute()
    return res.json(showAdm)
  }

  async updateAdm(req: Request, res: Response): Promise<Response> {
    const { name, birthDate, sexualOrientation, email, lastEmail, fone, avatar, password } = req.body
    const { id } = req.params

    const admForUpdate = new UpdateAdmService()
    const thisAdm = await admForUpdate.execute({
      id,
      name,
      birthDate,
      sexualOrientation,
      email,
      lastEmail,
      fone,
      avatar,
      password,
    })
    return res.json(thisAdm)
  }

  public async deleteAdm(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const deleteAdm = new DeleteAdmService()
    await deleteAdm.execute({ id })
    return response.json([])
  }
}
export default AdmController
