package com.worldevs.testapp.ui.main

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.worldevs.testapp.databinding.ItemUnitBinding
import com.worldevs.testapp.model.Subject

class MainAdapter: RecyclerView.Adapter<MainViewHolder>() {

    private var listSubjects: List<Subject> = emptyList()

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MainViewHolder {
        val inflater = LayoutInflater.from(parent.context)
        val binding = ItemUnitBinding.inflate(inflater, parent, false)
        return MainViewHolder(binding)
    }

    override fun onBindViewHolder(holder: MainViewHolder, position: Int) {
        val subject = listSubjects[position]
        holder.bind(subject)
    }

    override fun getItemCount(): Int = listSubjects.size

    fun submitList(subject: List<Subject>) {
        listSubjects = subject
        notifyDataSetChanged()
    }
}