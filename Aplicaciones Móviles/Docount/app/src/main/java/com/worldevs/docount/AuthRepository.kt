package com.worldevs.docount

import android.app.Application
import androidx.lifecycle.MutableLiveData
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.auth.api.signin.GoogleSignInClient
import com.google.android.gms.auth.api.signin.GoogleSignInOptions

class AuthRepository(private var application: Application) {

    fun signInWithGoogle(): MutableLiveData<GoogleSignInClient> {
        val authenticatedUserMutableLiveData: MutableLiveData<GoogleSignInClient> = MutableLiveData()
        val googleConf = GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
            .requestIdToken(application.getString(R.string.default_web_client_id))
            .requestEmail().build()
        val googleClient: GoogleSignInClient = GoogleSignIn.getClient(application, googleConf)
        googleClient.signOut()
        authenticatedUserMutableLiveData.value = googleClient
        return authenticatedUserMutableLiveData
    }

    fun signInWithFacebook() {

    }

    fun signInWithEmail(username: String, email: String) {

    }
}