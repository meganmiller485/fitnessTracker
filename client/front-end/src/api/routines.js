const API_URL = "http://localhost:3000/api";

//need to make an api call to pull the posts and return them back
export const fetchroutines = async () => {
  console.log("fetching all routines");
  try {
    const response = await fetch(`${API_URL}/routines`);
    //add a method to pass token

    const data = await response.json();

    // console.log(posts);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const makeRoutine = async (token, name, goal, isPublic) => {
  console.log("creating routine..");
  try {
    const response = await fetch(`${API_URL}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        goal,
        isPublic,
      }),
    });

    console.log("this is the response", response);
    //we want to target the token of the returning user, we can destructure the
    //response object to be just the token, and then return the token
    const data = await response.json();
    console.log("this is my routine", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteRoutine = async (routineId, token) => {
  console.log("deleting routine..", routineId);
  try {
    const response = await fetch(`${API_URL}/routines/${routineId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("this is the response from delete", response);
    //we want to target the token of the returning user, we can destructure the
    //response object to be just the token, and then return the token
    return "routine deleted";
  } catch (error) {
    console.error(error);
  }
};

export const updateRoutine = async (token, routineId, name, goal) => {
  console.log("updating routine..");
  try {
    const response = await fetch(`${API_URL}/routines/${routineId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        goal,
      }),
    });

    console.log("this is the response from update", response);
    //we want to target the token of the returning user, we can destructure the
    //response object to be just the token, and then return the token
    const data = await response.json();
    console.log("this is my updated routine", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
