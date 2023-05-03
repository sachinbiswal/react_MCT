import {legacy_createStore} from 'redux'
import Areducer from './Reducer'
export const Store=legacy_createStore(Areducer)
console.log(Store)
