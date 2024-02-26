package com.worldevs.docount.importdocount

import android.app.Application
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.MutableLiveData
import com.worldevs.docount.Docount
import com.worldevs.docount.DocountRepository

class ImportDocountViewModel(application: Application): AndroidViewModel(application) {

    private val docountRepository = DocountRepository(application)

    private fun _importDocount(): MutableLiveData<Docount>{
        return docountRepository.importDocount()
    }
    fun importDocount(){

    }
}