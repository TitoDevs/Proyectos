package com.worldevs.docount.balance

import android.content.ClipData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class BalanceViewModel : ViewModel() {
    val selected = MutableLiveData<ClipData.Item>()

    fun select(item: ClipData.Item){
        selected.value = item
    }

}