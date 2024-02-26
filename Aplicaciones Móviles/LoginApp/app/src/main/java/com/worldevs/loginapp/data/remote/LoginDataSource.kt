package com.worldevs.loginapp.data.remote

import com.worldevs.loginapp.data.model.User
import com.worldevs.loginapp.data.result.Result
import java.io.IOException

class LoginDataSource {

    private val auth: AuthFirebase = AuthFirebase()

    fun login(email: String, password: String): Result<User> {
        return try {
            auth.logInByEmail(email, password)
            val user = User(email, password)
            Result.Success(user)
        } catch (e: Throwable) {
            Result.Error(IOException("Error logging in", e))
        }
    }

    fun createAccount(email: String, password: String): Result<User> {
        return try {
            auth.createAccount(email, password)
            val user = User(email, password)
            Result.Success(user)
        } catch (e: Throwable) {
            Result.Error(IOException("Error logging in", e))
        }
    }

    fun logout() {
        auth.logOut()
    }
}