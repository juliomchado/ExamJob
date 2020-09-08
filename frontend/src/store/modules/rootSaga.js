import { all} from 'redux-saga/effects'

import content from './content/sagas'

export default function* rootSaga(){
  return yield all([
    content
  ])
}
