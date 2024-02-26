package com.worldevs.docount.main

import android.content.Intent
import android.graphics.drawable.Drawable
import android.os.Bundle
import android.text.Spannable
import android.text.SpannableString
import android.text.style.ImageSpan
import android.view.Menu
import android.view.MenuItem
import android.view.SubMenu
import android.view.View
import androidx.activity.viewModels
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.res.ResourcesCompat
import androidx.core.splashscreen.SplashScreen.Companion.installSplashScreen
import androidx.lifecycle.Observer
import androidx.recyclerview.widget.DividerItemDecoration
import androidx.recyclerview.widget.LinearLayoutManager
import com.worldevs.docount.*
import com.worldevs.docount.newdocount.NewDocountActivity
import com.worldevs.docount.signin.SignInActivity
import com.worldevs.docount.databinding.ActivityMainBinding
import com.worldevs.docount.importdocount.ImportDocountActivity
import com.worldevs.docount.settings.SettingsActivity

class MainActivity : AppCompatActivity() {

    //Properties
    private lateinit var binding: ActivityMainBinding
    private val model: MainViewModel by viewModels()
    private lateinit var adapter: DocountRVAdapter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // SplashScreen
        installSplashScreen().apply {
            setKeepOnScreenCondition {
                model.isLoading.value
            }
        }

        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        // Setup
        setup()
    }

    private fun setup() {

        // UI
        // Floating Button
        binding.accionImportDocount.setOnClickListener {
            startActivity(Intent(this, ImportDocountActivity::class.java))
            binding.menuFab.collapse()
        }

        binding.accionNewDocount.setOnClickListener {
            startActivity(Intent(this, NewDocountActivity::class.java))
            binding.menuFab.collapse()
        }

        // RecyclerView
        val manager = LinearLayoutManager(this)
        val decoration = DividerItemDecoration(this, manager.orientation)

        adapter = DocountRVAdapter(this)
        binding.rvDocount.layoutManager = manager
        binding.rvDocount.adapter = adapter
        binding.rvDocount.addItemDecoration(decoration)

        observeData()
    }

    private fun observeData() {
        val shimmer = binding.shimmerViewContainer
        shimmer.startShimmer()
        model.getDocount().observe(this, Observer {
            adapter.setListData(it)
            adapter.notifyDataSetChanged()
            shimmer.stopShimmer()
            shimmer.hideShimmer()
            shimmer.visibility = View.GONE
        })
    }

    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        menu.add(
            0,
            R.id.action_settings,
            1,
            menuIconWithText(
                ResourcesCompat.getDrawable(
                    resources,
                    R.drawable.ic_baseline_person_24,
                    null
                ), resources.getString(R.string.action_settings)
            )
        )
        menu.add(
            0,
            R.id.action_share,
            2,
            menuIconWithText(
                ResourcesCompat.getDrawable(resources, R.drawable.ic_share_24, null),
                resources.getString(R.string.action_share)
            )
        )
        menu.add(
            0,
            R.id.action_rate,
            3,
            menuIconWithText(
                ResourcesCompat.getDrawable(
                    resources,
                    R.drawable.ic_star_rate_24,
                    null
                ), resources.getString(R.string.action_rate)
            )
        )
        val help: SubMenu = menu.addSubMenu(
            0,
            R.id.action_help,
            4,
            menuIconWithText(
                ResourcesCompat.getDrawable(resources, R.drawable.ic_help_24, null),
                resources.getString(R.string.action_help)
            )
        )
        help.clearHeader()
        help.add(
            0,
            R.id.action_rate,
            1,
            menuIconWithText(
                ResourcesCompat.getDrawable(
                    resources,
                    R.drawable.ic_baseline_person_24,
                    null
                ), resources.getString(R.string.action_aboutus)
            )
        )
        help.add(
            0,
            R.id.action_rate,
            2,
            menuIconWithText(
                ResourcesCompat.getDrawable(resources, R.drawable.ic_asked_24, null),
                resources.getString(R.string.action_faq)
            )
        )
        help.add(
            0,
            R.id.action_rate,
            3,
            menuIconWithText(
                ResourcesCompat.getDrawable(resources, R.drawable.ic_contact_24, null),
                resources.getString(R.string.action_contactus)
            )
        )
        val terms: SubMenu = menu.addSubMenu(
            0,
            R.id.action_terms,
            5,
            menuIconWithText(
                ResourcesCompat.getDrawable(
                    resources,
                    R.drawable.ic_baseline_article_24,
                    null
                ), resources.getString(R.string.action_terms)
            )
        )
        terms.clearHeader()
        terms.add(
            0,
            R.id.action_rate,
            1,
            menuIconWithText(
                ResourcesCompat.getDrawable(
                    resources,
                    R.drawable.ic_baseline_article_24,
                    null
                ), resources.getString(R.string.action_termsuses)
            )
        )
        terms.add(
            0,
            R.id.action_rate,
            2,
            menuIconWithText(
                ResourcesCompat.getDrawable(
                    resources,
                    R.drawable.ic_baseline_lock_24,
                    null
                ), resources.getString(R.string.action_polity)
            )
        )
        terms.add(
            0,
            R.id.action_rate,
            3,
            menuIconWithText(
                ResourcesCompat.getDrawable(
                    resources,
                    R.drawable.ic_baseline_cookie_24,
                    null
                ), resources.getString(R.string.action_cookies)
            )
        )
        return true
    }

    private fun menuIconWithText(r: Drawable?, title: String): CharSequence {
        r?.setBounds(0, 0, r.intrinsicWidth, r.intrinsicHeight)
        val sb = SpannableString("    $title")
        val imageSpan = ImageSpan(r!!, ImageSpan.ALIGN_BOTTOM)
        sb.setSpan(imageSpan, 0, 1, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE)
        return sb
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        when (item.itemId) {
            R.id.action_settings -> if(Session(application).getCurrentUser()){
                startActivity(Intent(this, SettingsActivity::class.java))
            } else {
                startActivity(Intent(this, SignInActivity::class.java))
            }
            else -> super.onOptionsItemSelected(item)
        }
        return true
    }
}