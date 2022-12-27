import { LoginPage } from "../page_object/login_page"

let loginPage = new LoginPage()
const URL = 'http://10.0.7.73:8000/home'

it('Login ', () => {
    loginPage.login(URL,'aditya.meysin@equine.net','P@ssw0rd!')
    loginPage.assertLoginSuccess()
})