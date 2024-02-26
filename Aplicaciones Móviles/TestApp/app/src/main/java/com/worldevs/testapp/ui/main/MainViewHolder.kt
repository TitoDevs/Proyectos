package com.worldevs.testapp.ui.main

import android.content.Intent
import androidx.recyclerview.widget.RecyclerView
import com.worldevs.testapp.databinding.ItemUnitBinding
import com.worldevs.testapp.model.Subject
import com.worldevs.testapp.ui.unit.UnitActivity

class MainViewHolder(private val binding: ItemUnitBinding) : RecyclerView.ViewHolder(binding.root) {
    fun bind(subject: Subject) {
        binding.tvSubject.text = subject.name
        itemView.setOnClickListener {
            val context = it.context
            val intent = Intent(context, UnitActivity::class.java)
            intent.putExtra("Subject", subject)
            context.startActivity(intent)
        }
    }
}