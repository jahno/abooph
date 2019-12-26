'use strict'

const UserTransformer = use('App/Transformers/UserTransformer')
const User = use('App/Models/User')
const Hash = use('Hash')
const {validateAll} = use('Validator')

class AuthController {

	async Login({request,auth,session,response,transform})
	{
     
		//const {jwt} = request.post()
		const {email,password } = request.all()


		//const {token} = await auth
		const data = await auth
			//.authenticator(jwt)
		 	//.withRefreshToken()
		 	.attempt(email,password)
		 return {data}


		 	//.getUser()

		 	//const {user} = request.post()

		 	/*return transform.collection(users, user => ({
			  email: user.email,
			  password: user.password
			}))*/

		//return transform.collection(users, UserTransformer)
       
       
    /*   if(!error){
               
       		const user = await User.query()
                           			.where('email',email)
                           			.first()


            if(user){
		       const passwordVerified = await Hash.verify(password,user.password)
		        if(passwordVerified){
		        	 
		        	let roles=await user.getRoles()
		          return {user,token,roles}
		        }
		     
           }
       }
  */

    /*  const {email,password} = request.all()
       const user = await User.query()
                           .with('role')
                           .with('organisation')
                           .where('email',email)
                           .first()

        

         if(user){
       const passwordVerified = await Hash.verify(password,user.password)
        if(!passwordVerified){
          return response.status(404).json({msg:'erreur password incorrect'})
        }
     }else{
       return response.status(404).json({msg:'erreur email incorrect'})
     } */


		 	
		 	//return {token:token,user:user}


		 }

async logout({ request, response, auth }) {
    let refresh_token = request.input('refresh_token')

    if (!refresh_token) {
      refresh_token = request.header('refresh_token')
    }

    const loggedOut = await auth
      .authenticator('jwt')
      .revokeTokens([refresh_token], true)

    return response.status(204).send({})
  }


  async register({ request, response, auth }) {
    let refresh_token = request.input('refresh_token')

    if (!refresh_token) {
      refresh_token = request.header('refresh_token')
    }

    const loggedOut = await auth
      .authenticator('jwt')
      .revokeTokens([refresh_token], true)

    return response.status(204).send({})
  }


  async register({response,request}){
    const validation = await validateAll(request.all(),{
      name:'required',
      email:'required',
      password:'required',
    })
    if(validation.fails()){
      return response.status(404).json(validation.messages()) 
    }

    const user = await User.create({
      username:request.input('name'),
      email:request.input('email'),
      password:request.input('password'),
    })
    return response.status(200).json({msg:'creation du compte effectue'})
  }

  
}

module.exports = AuthController
