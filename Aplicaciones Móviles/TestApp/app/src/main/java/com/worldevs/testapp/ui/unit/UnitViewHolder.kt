package com.worldevs.testapp.ui.unit

import android.content.Intent
import androidx.recyclerview.widget.RecyclerView
import com.worldevs.testapp.ui.test.TestActivity
import com.worldevs.testapp.databinding.ItemUnitBinding
import com.worldevs.testapp.model.Chapter

class UnitViewHolder(private val binding: ItemUnitBinding) : RecyclerView.ViewHolder(binding.root) {
    fun bind(chapter: Chapter) {
        binding.tvSubject.text = chapter.name
        itemView.setOnClickListener {
            val context = it.context
            val intent = Intent(context, TestActivity::class.java)
            intent.putExtra("Chapter", chapter)
            context.startActivity(intent)
        }
    }
}