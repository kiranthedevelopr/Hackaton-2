import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";
const auth = getAuth();
const database = getDatabase();
const signUp = () => {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    // let image =  document.getElementById("image");
    // let imageFile = image.files[0]
    // console.log(image.files[0]);
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        // User creation successful
        const user = userCredential.user;
        const userId = user.uid;

        // Reference to the user's data in the database
        const userRef = ref(database, `users/${userId}`);

        // Data to be stored in the database
        const userData = {
            userFirstName,
            email,
            // Do not store the password in the database for security reasons.
        };

        // Set the user data in the database
        set(userRef, userData)
            .then(() => {
                // Data storage successful
                alert("Successfully signed up!");
                // Redirect to the dashboard or another page
                // window.location.href = "";
            })
            .catch((error) => {
                // Handle errors related to database write
                console.error("Error storing user data:", error);
                alert("Signup completed, but there was an issue storing user data.");
            });
    })
    .catch((error) => {
        // Handle authentication errors
        console.error("Authentication failed:", error);
        alert("Signup failed. Please check your email and password.");
    });
};




let signIn_btn = document.getElementById("btn-signup");
signIn_btn.addEventListener("click", signUp);


const login = () => {
    let email = document.getElementById("email-login");
    let password = document.getElementById("password-login")
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((resolve) => {
        alert("successfully signin", resolve)
            window.location = "file:///C:/Users/AA/Desktop/give%20it%20hackaton/attendence.html"
        })
        .catch((reject) => {
            alert("Signin rejected", reject)
        })
    }
    let signInBtn = document.getElementById("btn-login");
    if(signInBtn){
        signInBtn.addEventListener("click", signIn);
    }
    let loginIn_btn = document.getElementById("btn-login");
    loginIn_btn.addEventListener("click", login);
