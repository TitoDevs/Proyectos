package com.worldevs.docount

import android.content.Intent
import android.view.View
import androidx.recyclerview.widget.RecyclerView
import com.worldevs.docount.account.AccountActivity
import com.worldevs.docount.databinding.CardviewDocountBinding

class DocountRVViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {

    val binding = CardviewDocountBinding.bind(itemView)

    fun render(docount: Docount) {
        binding.tvTitle.text = docount.title
        binding.tvDescription.text = docount.description
        itemView.setOnClickListener {
            val intent = Intent(binding.tvDescription.context, AccountActivity::class.java)
            intent.putExtra("docount", docount)
            binding.tvDescription.context.startActivity(intent)
        }
    }
}