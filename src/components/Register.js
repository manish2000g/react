// Register
import { useState } from "react";
const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [Gender, setGender] = useState("");
  const [dropdown, setDropdown] = useState("");

  return (
    <div>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setUsername(e.target.value)}
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
          <p>{username}</p>
        </div>
        <div class="mb-3">
          <label class="form-label">Contact</label>
          <input
            type="Text"
            class="form-control"
            onChange={(e) => setContact(e.target.value)}
          />
          <p>{contact}</p>
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <p>{password}</p>
        <div
          class="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio1"
            value="Male"
            onChange={(e) => setGender(e.target.value)}
            autocomplete="off"
          />
          <label class="btn btn-outline-primary" for="btnradio1">
            Male
          </label>

          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio2"
            value="Female"
            onChange={(e) => setGender(e.target.value)}
            autocomplete="off"
          />
          <label class="btn btn-outline-primary" for="btnradio2">
            Female
          </label>
        </div>
        <p>{Gender}</p>

        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Register;
