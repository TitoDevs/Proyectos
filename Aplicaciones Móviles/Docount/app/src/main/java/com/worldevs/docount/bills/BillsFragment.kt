package com.worldevs.docount.bills

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.activityViewModels
import androidx.lifecycle.viewModelScope
import com.worldevs.docount.databinding.FragmentBillsBinding

class BillsFragment : Fragment() {

    // Properties
    private var _binding: FragmentBillsBinding? = null
    private val binding get() = _binding!!

    private val model: BillsViewModel by activityViewModels()

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        _binding = FragmentBillsBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        // UI

        // Setup
        model.viewModelScope
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}