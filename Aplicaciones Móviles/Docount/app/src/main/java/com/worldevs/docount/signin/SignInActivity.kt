package com.worldevs.docount.signin

import android.app.Activity
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import androidx.activity.result.contract.ActivityResultContracts
import androidx.activity.viewModels
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.common.api.ApiException
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.GoogleAuthProvider
import com.worldevs.docount.R
import com.worldevs.docount.databinding.ActivitySignInBinding
import com.worldevs.docount.settings.SettingsActivity

class SignInActivity : AppCompatActivity() {

    // Properties
    private lateinit var binding: ActivitySignInBinding
    private val model: SignInViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivitySignInBinding.inflate(layoutInflater)
        setContentView(binding.root)

        // ActionBar
        supportActionBar!!.hide()
        binding.toolbar.title = getString(R.string.entrar)
        binding.toolbar.setNavigationOnClickListener {
            onSupportNavigateUp()
        }

        // Setup
        signInGoogle()
        signInFacebook()
        signInEmail()
    }

    private fun signInGoogle(){
        binding.btSingInGoogle.setOnClickListener {
            activityResult.launch(model.signInWithGoogle().value?.signInIntent)
        }
    }

    private fun signInFacebook(){
        binding.btSignInFacebook.setOnClickListener {
            model.signInWithFacebook()
        }
    }

    private fun signInEmail(){
        binding.btSignIn.setOnClickListener {
            val username: String = binding.textInputName.editText?.text.toString()
            val email: String = binding.textInputEmail.editText?.text.toString()
            model.signInWithEmail(username, email)
        }
    }

    private var activityResult = registerForActivityResult(ActivityResultContracts.StartActivityForResult()){ result ->
        if (result.resultCode == Activity.RESULT_OK){
            val task = GoogleSignIn.getSignedInAccountFromIntent(result.data)
            try {
                val account = task.getResult(ApiException::class.java)
                if (account != null){
                    val credential = GoogleAuthProvider.getCredential(account.idToken, null)
                    FirebaseAuth.getInstance().signInWithCredential(credential).addOnCompleteListener {
                        if (it.isSuccessful){
                            val idUser: String = it.result.user?.uid ?: ""
                            val username: String = it.result.user?.displayName ?: ""
                            val imageUrl: String = it.result.user?.photoUrl.toString()
                            val email: String = it.result.user?.email ?: ""
                            model.saveSignInGoogle(idUser, email)
                            model.savePersonalDataSignIn(idUser,username, imageUrl,email)
                            startActivity(Intent(this, SettingsActivity::class.java))
                            finish()
                        } else{
                            Toast.makeText(this, "Wrong", Toast.LENGTH_SHORT).show()
                        }
                    }
                }
            } catch (e: ApiException){
                e.message
            }
        }
    }

    // Button send back
    override fun onSupportNavigateUp(): Boolean {
        onBackPressed()
        return false
    }
}