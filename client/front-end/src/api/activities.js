const API_URL = "http://localhost:3000/api";

export const fetchactivities = async () => {
  console.log("fetching all activities");
  try {
    const response = await fetch(`${API_URL}/activities`);
    //add a method to pass token

    const data = await response.json();

    // console.log(posts);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const makeActivity = async (token, name, description) => {
  console.log("creating activities..");
  try {
    const response = await fetch(`${API_URL}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        description,
      }),
    });

    const data = await response.json();
    
    console.log("this is my activity", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addActToRoutine = async (
  token,
  routineId,
  activityId,
  count,
  duration
) => {
  console.log("adding activities to routine...");
  try {
    const response = await fetch(
      `${API_URL}/routines/${routineId}/activities`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          routineId,
          activityId,
          count,
          duration,
        }),
      }
    );

    const data = await response.json();
    console.log("these are my activities to add to routine", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteActivityFromRoutine = async (routineActivityId, token) => {
  console.log("deleting activity..", routineActivityId);
  try {
    const response = await fetch(`${API_URL}/routine_activities/${routineActivityId}`, {
      // Add token to request
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("activity to delete from routine", response);
    return "activity deleted";
  } catch (error) {
    console.error(error);
  }
};


export const updateCountDur = async (token, routineActivityId, count, duration) => {
  console.log("updating count and duration...")
  console.log('this is my routineactivitiyId', routineActivityId)
  try {
    const response = await fetch(`${API_URL}/routine_activities/${routineActivityId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        count,
        duration,
      }),
    });
    
    console.log("this is the response from update count/duration", response)
    
    const data = await response.json();
    console.log("this is my updated count/dur", data)
    return data;
  } catch (error) {
    console.error(error)
  }
}