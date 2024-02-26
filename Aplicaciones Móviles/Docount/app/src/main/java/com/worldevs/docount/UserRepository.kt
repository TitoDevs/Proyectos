package com.worldevs.docount

import android.app.Application
import android.util.Log
import android.widget.Toast
import androidx.lifecycle.MutableLiveData
import com.google.firebase.auth.ktx.auth
import com.google.firebase.database.*
import com.google.firebase.database.ktx.database
import com.google.firebase.database.ktx.getValue
import com.google.firebase.ktx.Firebase

class UserRepository(private var application: Application){

    // Properties
    private lateinit var mRef: DatabaseReference
    private var mDatabase = Firebase.database
    private var mAuth = Firebase.auth.currentUser

    fun savePersonalDataSignIn(userId: String, username: String, imageUrl: String, email: String) {
        mRef = Firebase.database.reference
        val user = User(userId,username,imageUrl,email)
        mRef.child("users").child(userId).child("personal_data").setValue(user).addOnCompleteListener{
            if (it.isSuccessful){
                Log.e("SaveDataSignIn", "Success")
            }else{
                Log.e("SaveDataSignIn", "Wrong")
            }
        }
    }

    fun getPersonalData(): MutableLiveData<User>{
        val reference = mDatabase.reference.child("users").child(mAuth!!.uid).child("personal_data")
        val personalDataMutableLiveData: MutableLiveData<User> = MutableLiveData()
        reference.addValueEventListener(object: ValueEventListener{
            override fun onDataChange(snapshot: DataSnapshot) {
                if (snapshot.exists()){
                    personalDataMutableLiveData.value = snapshot.getValue<User>()
                }
            }
            override fun onCancelled(error: DatabaseError) {
                TODO("Not yet implemented")
            }
        })
        return personalDataMutableLiveData
    }

    fun editProfile(username: String, alias: String, iban: String){
        val reference = mDatabase.reference.child("users").child(mAuth!!.uid).child("personal_data")
        val personalDataMutableLiveData: MutableLiveData<User> = MutableLiveData()
        reference.addListenerForSingleValueEvent(object: ValueEventListener{
            override fun onDataChange(snapshot: DataSnapshot) {
                if (snapshot.exists()){
                    val data: User? = snapshot.getValue<User>()
                    personalDataMutableLiveData.value = data

                    if(username.length != data?.username?.length){
                        setPersonalData("username", username)
                        Toast.makeText(application, "User ha cambiado", Toast.LENGTH_SHORT).show()
                    }

                    if(alias.length != data?.alias?.length){
                        setPersonalData("alias", alias)
                        Toast.makeText(application, "Alias ha cambiado", Toast.LENGTH_SHORT).show()
                    }

                    if (iban.length != data?.iban?.length){
                        setPersonalData("iban", iban)
                        Toast.makeText(application, "Iban ha cambiado", Toast.LENGTH_SHORT).show()
                    }
                }
            }
            override fun onCancelled(error: DatabaseError) {
                TODO("Not yet implemented")
            }
        })
    }

    fun setPersonalData(data: String, userData: String){
        mRef = Firebase.database.reference
        mRef.child("users").child(mAuth!!.uid).child("personal_data").child(data).setValue(userData).addOnCompleteListener{
            if (it.isSuccessful){
                Log.w("EditProfile", "Success")
            }else{
                Log.e("EditProfile", "Wrong")
            }
        }
    }
}
