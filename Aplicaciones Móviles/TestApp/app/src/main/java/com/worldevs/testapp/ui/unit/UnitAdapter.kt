package com.worldevs.testapp.ui.unit

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.worldevs.testapp.databinding.ItemUnitBinding
import com.worldevs.testapp.model.Chapter

class UnitAdapter : RecyclerView.Adapter<UnitViewHolder>() {

    private var listChapter: List<Chapter> = emptyList()

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): UnitViewHolder {
        val context = LayoutInflater.from(parent.context)
        val binding = ItemUnitBinding.inflate(context, parent, false)
        return UnitViewHolder(binding)
    }

    override fun onBindViewHolder(holder: UnitViewHolder, position: Int) {
        val unit = listChapter[position]
        holder.bind(unit)
    }

    override fun getItemCount(): Int = listChapter.size

    fun submitList(subject: List<Chapter>) {
        listChapter = subject
        notifyDataSetChanged()
    }
}