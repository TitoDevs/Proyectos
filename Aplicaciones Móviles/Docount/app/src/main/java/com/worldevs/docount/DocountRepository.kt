package com.worldevs.docount

import android.app.Application
import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import com.google.firebase.auth.ktx.auth
import com.google.firebase.database.DataSnapshot
import com.google.firebase.database.DatabaseError
import com.google.firebase.database.DatabaseReference
import com.google.firebase.database.ValueEventListener
import com.google.firebase.database.ktx.database
import com.google.firebase.database.ktx.getValue
import com.google.firebase.ktx.Firebase

class DocountRepository(private var application: Application) {

    // Properties
    private lateinit var mRef: DatabaseReference
    private var mAuth = Firebase.auth.currentUser

    fun setNewDocounts(title: String, description: String, coin: String, category: String, users: MutableList<User>) {
        mRef = Firebase.database.reference
        val push: String = mRef.push().key.toString()
        val docount = Docount(push, title, description, coin, category)

        mRef.child("users").child(mAuth!!.uid).child("docounts").child(push).setValue(true)
        mRef.child("docounts").child(push).child("data").setValue(docount).addOnCompleteListener{ userDocount ->
            if (userDocount.isSuccessful){
                Log.e("SaveDataSignIn", "Success")
                for (list in users){
                    mRef.child("docounts").child(push).child("users").child(list.userId).setValue(true)
                }
            }else{
                Log.e("SaveDAtaSignIn", "Wrong")
            }
        }
    }

    fun getDocounts(): LiveData<MutableList<Docount>> {
        val mutableList = MutableLiveData<MutableList<Docount>>()
        val listDataDocount = mutableListOf<Docount>()
        mRef = Firebase.database.reference
        mRef.child("users").child(mAuth!!.uid).child("docounts").addValueEventListener(object: ValueEventListener {
            override fun onDataChange(snapshot: DataSnapshot) {
                if (snapshot.exists()){
                    listDataDocount.clear()
                    for (item in snapshot.children){
                        mRef.child("docounts").child(item.key.toString()).child("data").addListenerForSingleValueEvent(object: ValueEventListener{
                            override fun onDataChange(snapshot: DataSnapshot) {
                                val dataDocount = snapshot.getValue<Docount>()
                                if(snapshot.exists()){
                                    listDataDocount.add(dataDocount!!)
                                    mutableList.value = listDataDocount
                                }
                            }
                            override fun onCancelled(error: DatabaseError) {
                                Log.w("Error getDocounts: ", error.message)
                            }
                        })
                    }
                }
            }
            override fun onCancelled(error: DatabaseError) {
                Log.w("Error getUsersDocounts: ", error.message)
            }
        })
        return mutableList
    }

    fun importDocount(): MutableLiveData<Docount> {
        return MutableLiveData()
    }
}