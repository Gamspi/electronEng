import postActions from './reducers/general/actions';
import {wordsActions} from "../../main/store/words";

const allActions = {
  ...wordsActions
};
export default allActions;

