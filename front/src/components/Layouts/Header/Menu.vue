<template>
   <div class="navbar">
      <ul class="app-nav-list pl-0">
         <li class="app-nav-item" v-for="(menuItem , key) in menus" :key="key">
				<router-link  :to="menuItem.path">{{$t(menuItem.name)}}</router-link>
				<template v-if="menuItem.type === 'sub_menu'">
					<ul  class="sub-menu" v-if="menuItem.children && menuItem.children.length > 0">
						<li v-for="(subMenuItem , subMenuKey) in menuItem.children" :key="subMenuKey">
							<router-link :to="subMenuItem.path" :class="[ subMenuItem.type === 'sub_menu' ? 'menu-item-has-children':'']">{{$t(subMenuItem.name)}}</router-link>
							<ul class="sub-menu" v-if="subMenuItem.children_menus">
								<li  v-for="(childrenItem , childrenKey) in subMenuItem.children_menus" :key="childrenKey">
									<router-link :to="childrenItem.path" >{{$t(childrenItem.name)}}</router-link>
								</li>
							</ul>
						</li>
					</ul>
				</template>
				<template v-if="menuItem.type === 'mega_menu'">
					<ul class="sub-menu mega">
						<li v-for="(megaitem,megaitemkey) in menuItem.children" :key="megaitemkey">
							<a>{{$t(megaitemkey)}}</a>
							<ul class="sub-menu">
								<li v-for="(submega,submegakey) in megaitem" :key="submegakey">
									<router-link :to="{name: 'Products', params: {title:$t(megaitemkey)}, query: {category: submega.path}}">{{$t(submega.name)}}</router-link>
								</li>
								
							</ul>
						</li>
					</ul>
				</template>

				
         </li>

           	<template  v-if="!this.$store.state.auth.token">
           	  <li class="app-nav-item"> 
           	  	<router-link :to="'#'" >S'identifier</router-link>
					<ul  class="sub-menu" >
						<li >
							<router-link :to="'/session/signup'" :class="'sub_menu'">S'enregistre</router-link>
							<router-link :to="'/session/signin'" :class="'sub_menu'">Se connecter</router-link>
							 
						</li>
					</ul>
				</li>
			</template>


                  <template>
					 <li  v-if="checkPermission(['admin'])">
									<router-link :to="'/admin-panel/reports'">admin</router-link>
					</li>
			
				</template>


      </ul>
   </div>
</template>

<script>
import { mapGetters } from 'vuex';
import checkPermission from '@/utils/permission'
export default {
   computed:{
		...mapGetters(["menus"]),
	},
	methods: {
    checkPermission
   }
}
</script>

