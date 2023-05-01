import { Link, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { getUser } from "../api/api";

export async function loader() {
  const userData = localStorage.getItem("user");
  if (userData) {
    const res = await getUser(userData);
    return res.data;
  } else {
    return redirect("/login");
  }
}

function Dashboard() {
  const navigate = useNavigate();
  const user = useLoaderData();

  return (
    <section>
      <article>
        <h2 className="title small-bottom-spacer">Dashboard</h2>
        <h3 className="subtitle small-bottom-spacer">{`Hello ${user.firstname}`}</h3>
        <div className="text-bold flex-column-small small-bottom-spacer">
          <h3>Your checkout info:</h3>
          <p>{user.email}</p>
          <p>{user.street}</p>
          <p>{user.city}</p>
          <p>{user.state}</p>
          <p>{user.zip}</p>
        </div>
        <div className="bottom-spacer">
          <Link to={"/edit"} className="link">
            Edit Info
          </Link>
        </div>
      </article>

      {user.isModerator && (
        <article className="dashboard--moderator">
          <h3 className="subtitle small-bottom-spacer">Moderator Menu</h3>
          <div className="flex-small bottom-spacer">
            <Link className="link" to="/add">
              Add Product
            </Link>
            <Link className="link" to="/delete">
              Delete Product
            </Link>
            <Link className="link" to="/update">
              Update Product
            </Link>
          </div>
        </article>
      )}

      <button
        className="button"
        onClick={() => {
          localStorage.removeItem("user");
          navigate("/login");
        }}
      >
        Log Out
      </button>
    </section>
  );
}

export default Dashboard;
