package com.worldevs.loginapp.data.remote

import android.widget.Toast
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseAuthException

class AuthFirebase {

    private var auth: FirebaseAuth = FirebaseAuth.getInstance()

    fun createAccount(email: String, password: String) {
        try {
            auth.createUserWithEmailAndPassword(email, password)
                .addOnCompleteListener { task ->
                    if (task.isSuccessful) {
                        val user: String = auth.currentUser?.uid.toString()
                        Toast.makeText(auth.app.applicationContext, "Se ha creado la cuenta satisfactoriamente!, $user", Toast.LENGTH_SHORT).show()

                    } else {
                        Toast.makeText(auth.app.applicationContext, "Hubo un error al intentar crear la cuenta", Toast.LENGTH_SHORT).show()
                    }
                }
        } catch (e: FirebaseAuthException) {
            handleException(e)
        }
    }

    fun logInByEmail(email: String, password: String) {
        try {
            auth.signInWithEmailAndPassword(email, password)
                .addOnCompleteListener { task ->
                    if (task.isSuccessful) {
                        val user: String = auth.currentUser?.uid.toString()
                        Toast.makeText(auth.app.applicationContext, "Ha iniciado sesión correctamente, $user", Toast.LENGTH_SHORT).show()
                    } else {
                        Toast.makeText(auth.app.applicationContext, "Hubo un error", Toast.LENGTH_SHORT).show()
                    }
                }
        } catch (e: FirebaseAuthException) {
            handleException(e)
        }
    }

    fun logOut() {
        try {
            auth.signOut()
        } catch (e: FirebaseAuthException) {
            handleException(e)
        }
    }

    private fun handleException(e: FirebaseAuthException) {
        Toast.makeText(auth.app.applicationContext, "Error: ${e.message}", Toast.LENGTH_SHORT).show()
    }
}

