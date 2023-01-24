
const API_URL = "http://localhost:3000/api";

export const registerUser = async(username, password) => {
    console.log("registering user!")
    try {
        const response = await fetch(`${API_URL}/users/register`,{
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            
                username,
                password
              ,
            }),
            }
            );
            
    
            const token = await response.json();
            console.log("this is my token",token.token)
            return token.token;
        }
     catch (error) {
        console.error(error)
    }
}

//need to make an api call to assign the user to the token
//so we need to pass in token into our function 
export const fetchMe = async(token) => {
    console.log("fetching user..")
  try {
        const response = await fetch(`${API_URL}/users/me`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          })
        const data = await response.json();
        console.log("fetch me data:", data)
        return data;
    } 
    catch (error) {
        console.error(error)
    }
};

//api route used for a user to login when they already have an account
export const loginUser = async(username, password) => {
  console.log("Loggin user in!")
  
  try {
    
      const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
       
          username,
          password
        
      }),
      }
      );
       //need sean to explain this object destructuring 

       //we want to target the token of the returning user, we can destructure the 
       //response object to be just the token, and then return the token 
      const token = await response.json();
      
      console.log("this is login token", token.token)
      return token.token;
      
      }
  catch (error) {
  console.error(error)
  }
};
