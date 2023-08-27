import { create } from 'zustand'
type User = {
  id: string
  name: string
  email: string
  password: string
}
type State = {
  user?: User
}

export const useAuth = create<State>()(() => ({}))
