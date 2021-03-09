import { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypeSelector'; 
import { useActions } from '../hooks/useActions';


const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    // destruct useActions -> useActions() return an object of several dispatch and action creator pairs 
    // and here we just want to use one action creator which is searchRepositories
    // so when call searchRepositories(), is equal to call dispatch(actionCreators.searchRepositories())
    // 简单来说下行代码就是把dispatch和action creators打包，然后从里面拿一个来用
    const { searchRepositories } = useActions();
    // const state = useSelector((state) => state); // get all the state from the Redux store
    // const {state} = useSelector((state: any) => state.repositories)
    const { data, error, loading } = useTypedSelector(
        (state) => state.repositories
    ); // destruct state -> {data, error, loading}
    console.log(data);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        searchRepositories(term);
    }

    return (
    <div>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={ e => setTerm(e.target.value)} />
            <button>Search</button>
        </form>
        {/* 
        if error is null then do not show h3;
        if returns a string then show 
        */}
        {error && <h3>{error}</h3>} 
        {/* 
        if loading is false then do not show h3;
        if returns true then show Loading...
        */}
        {loading && <h3>Loading...</h3>}
        {/* 
        if no error and no loading then gives the data;
        error is null so !error is true
        loading is false so !loading is true
        */}
        {!error && !loading && 
        data.map((name) => <div key={name}>{name}</div>) 
        }
    </div>
    );
};

export default RepositoriesList;