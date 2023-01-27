import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { logOut } from "../store/authSlice";
const useLogout = () => {
  const navigate = useNavigate();
  // const history = useHistory();
  const dispatch = useDispatch();
  const handleLogout = () =>
    dispatch(logOut())
      .unwrap()
      .then(() => {
        navigate("/");
        // history.push("/");
      })
      .catch(() => {
        window.location.reload();
      });
  return handleLogout;
};

export default useLogout;
