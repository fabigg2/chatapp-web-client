import { useSelector } from "react-redux";
import { Navigate} from "react-router-dom";

export const PriveteRoutes = ({ children }) => {
    const selector =useSelector(state => state.auth);

    return <>{
        selector.logged ?
            children :
            <Navigate to="/login" />
    }</>;
};
