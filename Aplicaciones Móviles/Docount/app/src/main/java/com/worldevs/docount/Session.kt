package com.worldevs.docount

import android.app.Application
import android.content.Context
import androidx.lifecycle.MutableLiveData
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.auth.api.signin.GoogleSignInClient
import com.google.android.gms.auth.api.signin.GoogleSignInOptions
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseAuth.*
import com.google.firebase.auth.ktx.auth
import com.google.firebase.ktx.Firebase
import kotlin.math.sign

class Session(private val application: Application) {

    fun saveSignInGoogle(idUser: String, email: String){
        val prefs = application.getSharedPreferences("prefsFile", Context.MODE_PRIVATE).edit()
        prefs.putString("idUser", idUser)
        prefs.putString("email", email)
        prefs.apply()
    }

    fun signOutGoogle(){
        val prefs = application.getSharedPreferences("prefsFile", Context.MODE_PRIVATE).edit()
        prefs.clear()
        prefs.apply()
        val googleConf = GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
            .requestIdToken(application.getString(R.string.default_web_client_id))
            .requestEmail().build()
        val googleClient: GoogleSignInClient = GoogleSignIn.getClient(application, googleConf)
        googleClient.signOut()

        getInstance().signOut()
    }

    fun getCurrentUser(): Boolean {
        val user = Firebase.auth.currentUser
        return user != null && application.getSharedPreferences("prefsFile", Context.MODE_PRIVATE).contains("idUser")
    }

    fun signOut(): MutableLiveData<Boolean>{
        getInstance().signOut()
        val prefs = application.getSharedPreferences("prefsFile", Context.MODE_PRIVATE).edit()
        prefs.clear()
        prefs.apply()
        val signOutMutableLiveData: MutableLiveData<Boolean> = MutableLiveData()
        signOutMutableLiveData.value = true
        return signOutMutableLiveData
    }
}