import { 
  Grid, TextField, Button, Snackbar, Alert, MenuItem, 
  Select, InputLabel, FormControl 
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, register } from '../../State/Auth/Action';
import { useEffect, useState } from "react";

export default function RegisterForm({ handleNext }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openSnackBar, setOpenSnackBar] = useState(false);

  // Ensure `auth` is defined to prevent undefined errors
  const auth = useSelector((store) => store?.auth || { user: null, jwt: null, error: null });

  // Get JWT from local storage or Redux state safely
  const jwt = localStorage.getItem("jwt") || auth?.jwt;

  // Handle snackbar close
  const handleClose = () => setOpenSnackBar(false);

  // Dispatch `getUser()` if JWT is present
  useEffect(() => {
      if (jwt) {
          dispatch(getUser(jwt));
      }
  }, [jwt, auth?.jwt, dispatch]); // ✅ Ensure optional chaining (?.) and add `dispatch` as dependency

  // Open snackbar if user is registered or an error occurs
  useEffect(() => {
      if (auth.user || auth.error) setOpenSnackBar(true);
  }, [auth.user, auth.error]);

  // Handle form submission
  const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);

      const userData = {
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          password: data.get("password"),
          role: data.get("role")
      };

      console.log("User Data:", userData);
      dispatch(register(userData));
  };

  return (
      <div className="">
          <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                      <TextField
                          required
                          id="firstName"
                          name="firstName"
                          label="First Name"
                          fullWidth
                          autoComplete="given-name"
                      />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <TextField
                          required
                          id="lastName"
                          name="lastName"
                          label="Last Name"
                          fullWidth
                          autoComplete="given-name"
                      />
                  </Grid>
                  <Grid item xs={12}>
                      <TextField
                          required
                          id="email"
                          name="email"
                          label="Email"
                          fullWidth
                          autoComplete="email"
                      />
                  </Grid>

                  <Grid item xs={12}>
                      <FormControl fullWidth>
                          <InputLabel id="role-label">Role</InputLabel>
                          <Select
                              labelId="role-label"
                              id="role"
                              label="Role"
                              name="role"
                              defaultValue=""
                          >
                              <MenuItem value={"ROLE_ADMIN"}>Admin</MenuItem>
                              <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                          </Select>
                      </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                      <TextField
                          required
                          id="password"
                          name="password"
                          label="Password"
                          fullWidth
                          autoComplete="new-password"
                          type="password"
                      />
                  </Grid>

                  <Grid item xs={12}>
                      <Button
                          className="bg-[#9155FD] w-full"
                          type="submit"
                          variant="contained"
                          size="large"
                          sx={{ padding: ".8rem 0" }}
                      >
                          Register
                      </Button>
                  </Grid>
              </Grid>
          </form>

          <div className="flex justify-center flex-col items-center">
              <div className="py-3 flex items-center ">
                  <p className="m-0 p-0">Already have an account?</p>
                  <Button onClick={() => navigate("/login")} className="ml-5" size="small">
                      Login
                  </Button>
              </div>
          </div>

          {/* Snackbar for registration success or error */}
          <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity={auth.error ? "error" : "success"} sx={{ width: '100%' }}>
                  {auth.error ? auth.error : auth.user ? "Registration Successful" : ""}
              </Alert>
          </Snackbar>
      </div>
  );
}
