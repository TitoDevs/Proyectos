package com.worldevs.docount

import android.content.Context
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.recyclerview.widget.RecyclerView

class DocountRVAdapter(private val context: Context): RecyclerView.Adapter<DocountRVViewHolder>() {

    private var dataList = mutableListOf<Docount>()

    fun setListData(data: MutableList<Docount>){
        dataList = data
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): DocountRVViewHolder {
        val view = LayoutInflater.from(context).inflate(R.layout.cardview_docount, parent, false)
        return DocountRVViewHolder(view)
    }

    override fun onBindViewHolder(holder: DocountRVViewHolder, position: Int) {
        val docount = dataList[position]
        holder.render(docount)
    }

    override fun getItemId(position: Int): Long {
        return position.toLong()
    }

    override fun getItemViewType(position: Int): Int {
        return position
    }

    override fun getItemCount(): Int = dataList.size

}