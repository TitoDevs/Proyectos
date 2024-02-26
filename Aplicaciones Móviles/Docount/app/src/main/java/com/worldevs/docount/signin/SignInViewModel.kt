package com.worldevs.docount.signin

import android.app.Application
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import com.google.android.gms.auth.api.signin.GoogleSignInClient
import com.worldevs.docount.AuthRepository
import com.worldevs.docount.Session
import com.worldevs.docount.UserRepository

class SignInViewModel(application: Application): AndroidViewModel(application) {
    private val userRepository = UserRepository(application)
    private val authRepository = AuthRepository(application)
    private val session = Session(application)

    fun signInWithGoogle(): LiveData<GoogleSignInClient> {
        return _signInWithGoogle()
    }

    private fun _signInWithGoogle(): MutableLiveData<GoogleSignInClient>{
        return authRepository.signInWithGoogle()
    }

    fun signInWithFacebook(){
        authRepository.signInWithFacebook()
    }

    fun signInWithEmail(username: String, email: String){
        authRepository.signInWithEmail(username, email)
    }

    fun savePersonalDataSignIn(userId: String, username: String, imageUrl: String, email: String){
        userRepository.savePersonalDataSignIn(userId, username, imageUrl, email)
    }

    fun saveSignInGoogle(userId: String, email: String){
        session.saveSignInGoogle(userId, email)
    }
}