import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import allActionsCreators from '../store/allActions';

export const useAction = () => {
  /**
   * создаем диспатч
   */
  const dispatch = useDispatch();
  return bindActionCreators(allActionsCreators, dispatch);
};
