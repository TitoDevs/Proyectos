package com.worldevs.docount.balance

import android.content.ClipData
import androidx.lifecycle.ViewModelProvider
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.activityViewModels
import androidx.lifecycle.Observer
import com.worldevs.docount.R
import com.worldevs.docount.databinding.FragmentBalanceBinding
import java.nio.channels.Selector

class BalanceFragment : Fragment() {

    // Properties
    private var _binding: FragmentBalanceBinding? = null
    private val binding get() = _binding!!

    private lateinit var itemSelector: Selector

    private val model: BalanceViewModel by activityViewModels()

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        _binding = FragmentBalanceBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        // UI
        model.selected.observe(viewLifecycleOwner, Observer<ClipData.Item>{ item ->
            item.text
        })
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}