package com.worldevs.docount.main

import android.app.Application
import androidx.lifecycle.*
import com.worldevs.docount.Docount
import com.worldevs.docount.DocountRepository
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

class MainViewModel(application: Application): AndroidViewModel(application) {

    private val _isLoading = MutableStateFlow(true)
    val isLoading = _isLoading.asStateFlow()
    private val docountRepository = DocountRepository(application)

    init {
        viewModelScope.launch {
            session()
            delay(1000)
            _isLoading.value = false
        }
    }

    fun getDocount(): LiveData<MutableList<Docount>>{
        val mutableData = MutableLiveData<MutableList<Docount>>()
        docountRepository.getDocounts().observeForever { docountList ->
            mutableData.postValue(docountList)
        }
        return mutableData
    }

    fun session(){

    }
}