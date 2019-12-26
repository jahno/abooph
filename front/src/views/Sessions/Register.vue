<template>
	<div class="emb-register-wrap section-gap">
		<div class="container py-0">
			<v-layout row wrap align-center justify-center>
				<v-flex sm12 md12 lg8 xl7>
					<v-layout row mx-sm-0 mx-3  wrap align-center justify-center>
						<v-flex sm6 md7 lg6 xl6 hidden-sm-and-down>
							<div class="form-img register-image"></div>
						</v-flex>
						<v-flex sm10 md5 lg6 xl6>
							<div class="emb-card sign-in-form form-margin d-block white pa-6">
								<h4>Entrez vos informations</h4>
								<v-form ref="form" v-model="valid">
									<!-- <v-text-field
										type="text"
										placeholder="Prenom*"
										:rules="inputRules.basictextRules"
									>
									</v-text-field> -->
									<v-text-field
										type="text"
										placeholder="Nom*"
										v-model="user.name"
										:rules="inputRules.basictextRules"
									>
									</v-text-field>
									<v-text-field
										type="email"
										placeholder="Email*"
										v-model="user.email"
										:rules="emailRules"
									>
									</v-text-field>
									<v-text-field
										type="password"
										placeholder="Enter Password*"
										v-model="user.password"
										:rules="inputRules.basictextRules"
									>
									</v-text-field>
								<!-- 	<v-text-field
									class="mb-4"
									type="password"
									placeholder="Retype Passowrd*"
									:rules="inputRules.basictextRules"
								>
								</v-text-field> -->
									<v-btn class="accent mx-0 mb-4" large  @click.stop.prevent="saveDetails">
										S'enregistrer
									</v-btn>
									<p>Vous avez deja un compte?<router-link to="/session/signin" class="accent--text"> Connezcter vous</router-link></p>
								</v-form>
							</div>
						</v-flex>
					</v-layout>
				</v-flex>
			</v-layout>
		</div>
   </div>
</template>
	
<script>
import { register } from '@/api/login'
	export default{
   	data () {
      	return {
         	valid: false,
				emailRules: [
					v => !!v || 'Veuillez renseignez votre email',
					v => /.+@.+/.test(v) || 'Email invalide'
      		],
          	inputRules: {
               basictextRules: [v => !!v || 'Veuillez renseignez tous les champs !!!']
            },
            user:{
            	name:'',
            	email:'',
            	password:''
            }
         }
      },
      methods: {
         saveDetails(){
				this.$refs.form.validate();
				if(this.valid == true){
					console.log(this.user)
					register(this.user.name,this.user.email,this.user.password).then((da)=>{
						console.log(da)
						 this.$router.go('/session/signup');
					})
					
           		 }

			}
		}
	}
</script>