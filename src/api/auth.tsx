import { browserSessionPersistence, GithubAuthProvider, GoogleAuthProvider, setPersistence, signInWithPopup, signInWithRedirect } from "@firebase/auth";
import { auth } from "../services/firebase";

export async function loginGoogle() {
    await setPersistence(auth, browserSessionPersistence)
        .then( () => {
            const providerGoogle = new GoogleAuthProvider();
        
            return signInWithPopup(auth, providerGoogle)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

export async function loginGit() {
    await setPersistence(auth, browserSessionPersistence)
        .then( () => {
            const providerGit = new GithubAuthProvider();
        
            return signInWithPopup(auth, providerGit)

        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GithubAuthProvider.credentialFromError(error);
            // ...
        });
}