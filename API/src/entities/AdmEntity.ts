import { Column, Entity } from 'typeorm'

import User from './UserEntity'

@Entity('adms')
class Adm extends User {
  @Column({ type: 'text' })
  password: string
  avatar: any
}
export default Adm

/**
 *   @OneToOne(() => AdmToken, admTokens => admTokens.adm)
  admTokens: AdmToken
 */
