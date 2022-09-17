const loginPage = document.querySelector('.loginPage');
const loginMainBlock = document.getElementById('loginMainBlock');
const rigisButtonLogin = document.querySelector('.regis')
const loginButtonLogin = document.querySelector('.login')

let viewLogin = true;
let offOn = false;
const viewFunc = () => {
    viewLogin = !viewLogin
    loginPage.style.display = viewLogin ? 'flex' : 'none'
    renderColor()
}

// ---------------- Login or Sign Up Page Funtions ----------------


const login = `<div class='inputInsetBlock'>
    <p>Enter your email and password to register.</p>
    <input type='text' class='input' placeholder="Username" />
    <input type='password' class='input' placeholder="Enter your email address" />
    <input type='password' class='input' placeholder="Password" />
    <input type='password' class='input' placeholder="Confirm Password" />
    <p class='forgetStyle'>Forgot Password?</p>
    <button class='button'>Login</button>
    <br>
    <br>
    <hr>
    <p class='inputPInto'>Or login with</p> 


    
    </div>
`;
const regis = `
    
    <div class='inputInsetBlock'>
    <p>Enter your username and password to login.</p>
    <input type='text' class='input' placeholder="almamun_uxui@outlook.com" />
    <input type='password' class='input' placeholder="***********" />
    <p class='forgetStyle'>Forgot Password?</p>
    <button class='button'>Login</button>
    <br>
    <br>
    <hr>
    <p class='inputPInto'>Or login with</p> 

    </div>
`;


// ---------------- Render Funtions ----------------


const render = () => loginMainBlock.innerHTML = offOn ? login : regis;
const renderColor = () => {
    if (offOn) loginButtonLogin.style.color = '#3D3D3D'
    else loginButtonLogin.style.color = '#46A358'
    if (offOn) rigisButtonLogin.style.color = '#46A358'
    else rigisButtonLogin.style.color = '#3D3D3D'
}



const loginButton = () => {
    offOn = false;
    render()
    renderColor()

}
const regButton = () => {
    offOn = true;
    render()
    renderColor()

}



render()
viewFunc()


// carousel------------------

const caruselCard_1 = document.querySelector('.caruselCard-1');
const caruselCard_2 = document.querySelector('.caruselCard-2');
const caruselCard_3 = document.querySelector('.caruselCard-3');
const pureCarusel = document.querySelector('.pureCarusel');

let pageValue = 1;

const page1 = `<div class='page1'>
<div class"pages">
<p class="better">Welcome to Greenshop</p>
<h1 class="planet">Let's make a better <span class="green">planet</span> </h1>
<p class="text">We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
<button  class="button"> shop now</button>
</div>
 <div>
 <img src="./Assets/01 1 (1).png" alt="error">

 </div>
    
</div>`;
const page2 = `<div class='page2'>

<h1>hello world</h1>

</div>`;
const page3 = `<div class='page3'>
    <h1>Page 3</h1>
</div>`;

const renderCarusel = () => {
    if (pageValue == 1) pureCarusel.innerHTML = page1
    if (pageValue == 2) pureCarusel.innerHTML = page2
    if (pageValue == 3) pureCarusel.innerHTML = page3
}

const changePageValue = (e) => {
    pageValue = e
    renderCarusel()
}

const timeFunc = () => {
    setTimeout(()=> {
        if (pageValue == 4) pageValue = 1
        timeFunc()
        renderCarusel();
        pageValue = pageValue + 1
    }, 3000)
}
timeFunc()
renderCarusel();