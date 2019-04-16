import createHistory from 'history/createHashHistory'
let history = createHistory();

history.listen( (location) => {
    location.pathname && history.go(location.pathname);
} );
export default history;