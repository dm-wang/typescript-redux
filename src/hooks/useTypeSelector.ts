import { useSelector, TypedUseSelectorHook } from 'react-redux';
// useSelector hook allows you to extract data from the redux store state
import { RootState } from '../state' // Type of RootState

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
// 这个代码的意思就是把RootState的Type绑定到useTypedSelector里
// 这样就不用每次用useSelector都declare state的type
// 创建好这个hook之后，后面就不直接用useSelector,而是直接用useTypedSelector