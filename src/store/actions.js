import * as types from './mutation-types'

export const recordEntrancePage = ({ commit }, { name, id }) => {
  commit(types.RECORD_ENTRANCE_PAGE, {
    name, 
    id
  })
}